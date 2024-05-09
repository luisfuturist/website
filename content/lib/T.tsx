import { collect, formatToSegments, prepareFormat, type FormatContext, type InferValues, type Register, type Values } from '@psitta/core';
import { createElement, type ComponentChildren, type JSX } from 'preact';
import { useEffect, useMemo } from 'preact/hooks';
import { Fragment } from 'preact/jsx-runtime';
import { getLocale } from '../lib/state';

type SlotProps<V> = V & { decline: FormatContext<any>['decline'] }
type Slots<V> = Partial<Record<keyof V, (ComponentChildren | ((slotProps: SlotProps<V>) => ComponentChildren))>>

const T = <
  R extends Register,
  // @ts-ignore
  K extends keyof R['messages'],
  // @ts-ignore
  V extends InferValues<K | E>,
  // @ts-ignore
  E extends R['messages'][K][keyof R['messages'][K]]
>({
  text,
  values = {} as V,
  tag = 'span',
  children
}: {
  text: K;
  values?: Partial<V>;
  tag?: keyof JSX.IntrinsicElements;
  children?: Slots<V>
}) => {
  const locale = getLocale();

  const segments = useMemo(() => {
    const { localizedMessage, formatOptions } = prepareFormat(locale, locale)

    return formatToSegments(localizedMessage, values || {}, formatOptions);
  }, [text, values]);

  useEffect(() => {
    if (import.meta.env.DEV) {
      collect(text as any, values as Values);
    }
  }, []);

  const slots = children || {};

  return createElement(tag, {}, segments.map((segment, i) => (
    <Fragment key={i}>
      {segment.type === 'text' || (segment.key && !slots[segment.key]) ? (
        <>{segment.part}</>
      ) : (
        <>{
          typeof slots[segment.key!] === 'function'
            // @ts-ignore
            ? slots[segment.key!]({ ...segment.values as V, decline: segment.decline })
            : slots[segment.key!]
        }</>
      )}
    </Fragment>
  )))
};

export default T;
