@Composable
fun Modifier.simpleVerticalScrollbar(
    state: LazyListState,
    width: Dp = 8.dp
): Modifier {
    // Animate độ trong suốt
    val targetAlpha = if (state.isScrollInProgress) 1f else 0f
    val duration = if (state.isScrollInProgress) 150 else 500
    
    val alpha by animateFloatAsState(
        targetValue = targetAlpha,
        animationSpec = tween(
            durationMillis = duration,
            easing = FastOutSlowInEasing
        )
    )

    // Animate vị trí của thanh cuộn
    val firstVisibleElementIndex = state.firstVisibleItemIndex
    val scrollOffset by animateFloatAsState(
        targetValue = firstVisibleElementIndex.toFloat(),
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioLowBouncy,
            stiffness = Spring.StiffnessLow
        )
    )
    
    return drawWithContent {
        drawContent()

        val needDrawScrollbar = state.isScrollInProgress || alpha > 0.0f

        if (needDrawScrollbar && state.layoutInfo.totalItemsCount > 0) {
            val scrollbarHeight = 10.dp.toPx()
            val scrollProgress = scrollOffset / 
                               (state.layoutInfo.totalItemsCount - state.layoutInfo.visibleItemsInfo.size)
            val scrollbarOffsetY = (this.size.height - scrollbarHeight) * scrollProgress.coerceIn(0f, 1f)

            drawRoundRect(
                color = Color.Gray.copy(alpha = 0.6f), // Làm trong suốt một chút
                topLeft = Offset(this.size.width - width.toPx() - 14.dp.toPx(), scrollbarOffsetY),
                size = Size(width.toPx(), scrollbarHeight),
                alpha = alpha,
                cornerRadius = CornerRadius(4.dp.toPx(), 4.dp.toPx()),
                blendMode = BlendMode.SrcOver
            )
        }
    }
}
