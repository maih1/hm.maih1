class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Đặt màu cho thanh bar
        window.statusBarColor = Color.BLUE
        window.navigationBarColor = Color.BLACK

        // Tránh để thanh bar che view
        val contentView = findViewById<View>(R.id.content_view)
        ViewCompat.setOnApplyWindowInsetsListener(contentView) { v, insets ->
            val params = contentView.layoutParams as ViewGroup.MarginLayoutParams
            params.topMargin = insets.systemWindowInsetTop
            params.bottomMargin = insets.systemWindowInsetBottom
            contentView.layoutParams = params
            insets
        }
    }
}
