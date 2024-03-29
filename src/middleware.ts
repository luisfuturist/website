import { sequence } from "astro:middleware";

import "../content/config";
import psitta from "../content/lib/middleware";
import theme from "../lib/design/theme/middleware";

export const onRequest = sequence(psitta, theme)
