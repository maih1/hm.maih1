@Override
public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.menu_main, menu);

    MenuItem saveItem = menu.findItem(R.id.action_save);
    SpannableString s = new SpannableString("Save");

    // Kiểm tra xem có dịch vụ nào của Accessibility đang hoạt động hay không
    AccessibilityManager am = (AccessibilityManager) getSystemService(ACCESSIBILITY_SERVICE);
    boolean isAccessibilityEnabled = isAnyAccessibilityServiceEnabled(am);

    // Nếu tính năng Highlight button đang bật, set màu text khác để đảm bảo hiển thị
    int color = isAccessibilityEnabled ? Color.WHITE : Color.BLACK;
    s.setSpan(new ForegroundColorSpan(color), 0, s.length(), 0);

    saveItem.setTitle(s);
    return true;
}

private boolean isAnyAccessibilityServiceEnabled(AccessibilityManager am) {
    if (am != null && am.isEnabled()) {
        List<AccessibilityServiceInfo> enabledServices = am.getEnabledAccessibilityServiceList(AccessibilityServiceInfo.FEEDBACK_ALL_MASK);
        return !enabledServices.isEmpty();
    }
    return false;
}
