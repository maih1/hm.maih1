val color = context.getTheme().resolveAttribute(android.R.attr.textColorPrimaryInverse, true)
spannable.setSpan(ForegroundColorSpan(color), 0, spannable.length, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE)
