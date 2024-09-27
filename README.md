import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowInsetsController
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
            // Đặt decor view để vẽ phía sau các thanh hệ thống
            window.setDecorFitsSystemWindows(false)

            // Tạo màu cho nền của thanh trạng thái và thanh điều hướng
            val statusBarColor = Color.RED // Thay đổi màu tùy ý
            val navBarColor = Color.BLUE // Thay đổi màu tùy ý

            // Đặt màu trong suốt cho các thanh hệ thống
            window.statusBarColor = Color.TRANSPARENT
            window.navigationBarColor = Color.TRANSPARENT

            val rootView = findViewById<View>(android.R.id.content)
            ViewCompat.setOnApplyWindowInsetsListener(rootView) { view, windowInsets ->
                val insets = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars())

                // Tạo một custom view để vẽ nền
                class CustomBackgroundView(context: android.content.Context) : View(context) {
                    override fun onDraw(canvas: android.graphics.Canvas) {
                        super.onDraw(canvas)
                        // Vẽ nền cho thanh trạng thái
                        canvas.drawRect(0f, 0f, width.toFloat(), insets.top.toFloat(), android.graphics.Paint().apply { color = statusBarColor })
                        // Vẽ nền cho thanh điều hướng
                        canvas.drawRect(0f, (height - insets.bottom).toFloat(), width.toFloat(), height.toFloat(), android.graphics.Paint().apply { color = navBarColor })
                    }
                }

                // Thêm custom view vào layout
                if (view is android.view.ViewGroup && view.childCount > 0) {
                    val customBackgroundView = CustomBackgroundView(this)
                    view.addView(customBackgroundView, 0)
                    customBackgroundView.layoutParams = android.view.ViewGroup.LayoutParams(view.width, view.height)
                }

                // Áp dụng padding để tránh nội dung bị che khuất
                view.setPadding(insets.left, insets.top, insets.right, insets.bottom)

                // Trả về insets gốc để cho phép các view con xử lý nếu cần
                windowInsets
            }

            // Đặt màu chữ trên thanh trạng thái (tùy chọn)
            window.insetsController?.setSystemBarsAppearance(
                WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS,
                WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
            )
        }
    }
}
