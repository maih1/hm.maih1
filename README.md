val windowInsetsController = WindowCompat.getInsetsController(window, window.decorView)

        // Bước 2: Cài đặt để tránh đè layout
        WindowCompat.setDecorFitsSystemWindows(window, false)

        // Bước 3: Cài đặt màu cho systembar
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            // Đối với Android 11 (API 30) trở lên
            window.setDecorFitsSystemWindows(false)
            windowInsetsController.apply {
                // Hiển thị thanh trạng thái và thanh điều hướng
                show(WindowInsetsCompat.Type.systemBars())
                
                // Cài đặt màu cho thanh trạng thái và thanh điều hướng
                setSystemBarsAppearance(
                    WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS,
                    WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
                )
                setSystemBarsAppearance(
                    WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS,
                    WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS
                )
            }
        } else {
            // Đối với các phiên bản Android cũ hơn
            @Suppress("DEPRECATION")
            window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
                or View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
            )
        }

        // Tùy chọn: Cài đặt màu nền cho thanh trạng thái và thanh điều hướng
        window.statusBarColor = getColor(R.color.status_bar_color)
        window.navigationBarColor = getColor(R.color.navigation_bar_color)
