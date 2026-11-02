# tintuc — Trang trưng bày Hermes Agent

Website tĩnh bằng HTML/CSS/JavaScript, giới thiệu Hermes Agent `tintuc` với giao diện pastel xanh trời và vàng bơ. Nội dung mô tả đúng quy trình đã thống nhất, nêu rõ trạng thái kiểm thử và dùng một kịch bản demo hư cấu cố định.

## Các tệp

- `index.html` — nội dung tiếng Việt, các section, bảng và accordion.
- `styles.css` — giao diện responsive, không dùng thư viện hoặc font bên ngoài.
- `script.js` — demo cố định cùng nút mở/thu gọn quy trình.
- `.nojekyll` — tắt xử lý Jekyll mặc định của GitHub Pages.

## Ranh giới bảo mật

- Không kết nối Hermes, Feishu/Lark, backend hoặc API.
- Không có chat, form, trường tải tệp hay gửi yêu cầu.
- Demo dùng dữ liệu hư cấu nằm sẵn trong website; không truy cập Internet.
- Không chứa Profile, thông tin xác thực, đường dẫn nội bộ hoặc dữ liệu từ tệp mẫu riêng.
- Content Security Policy đặt `connect-src 'none'`; tài nguyên giao diện chỉ tải từ cùng website.

## Xem cục bộ

Mở `index.html` trong trình duyệt, hoặc chạy một máy chủ tĩnh trong thư mục này. Dùng điều hướng để chuyển section, mở/thu gọn quy trình, rồi nhấn **Xem quy trình mẫu**. Demo chỉ minh họa định dạng đầu ra, không phải kết quả kiểm chứng.

## Xuất bản bằng GitHub Pages

1. Tạo repository riêng cho website. Chỉ tải các tệp giao diện trong thư mục này lên, không thêm tài liệu Agent gốc.
2. Commit `index.html`, `styles.css`, `script.js`, `.nojekyll` và `README.md` vào branch `main`.
3. Trong **Settings → Pages**, chọn **Deploy from a branch**, branch `main` và thư mục `/(root)`, sau đó lưu.
4. Đợi GitHub Pages triển khai, rồi mở URL GitHub hiển thị để kiểm tra trang và nút demo.

Chỉ xác nhận đã công khai sau khi URL thực tế mở được và demo hoạt động.
