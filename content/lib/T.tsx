import { type FormatContext, type InferValues, type Values, collect, formatToSegments, getConfig, getFormatOptions, localizeKey } from '@psitta/core';
import { type Register } from '@psitta/core';
import { useEffect, useMemo } from 'preact/hooks';
import { Fragment } from 'preact/jsx-runtime';
import { getLocale } from '../lib/state';
import { createElement, type ComponentChildren, type JSX } from 'preact';

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
    const options = getConfig();
    const formatOptions = getFormatOptions(locale, options)
    const textToFormat = localizeKey(text as any, locale, options)
    return formatToSegments(textToFormat, values || {}, formatOptions);
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
