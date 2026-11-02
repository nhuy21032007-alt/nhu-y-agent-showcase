# Như Ý — Trang trưng bày Hermes Agent

Website tĩnh bằng HTML/CSS/JavaScript, giới thiệu Hermes Agent Như Ý với giao diện pastel xanh trời và vàng bơ. Nội dung mô tả quy trình, nêu rõ trạng thái kiểm thử và dùng một kịch bản demo hư cấu cố định.

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

Mở `index.html` trong trình duyệt, dùng điều hướng để chuyển section, mở/thu gọn quy trình, rồi nhấn **Xem quy trình mẫu**. Demo chỉ minh họa định dạng đầu ra, không phải kết quả kiểm chứng.

## Xuất bản bằng GitHub Pages

Repository này chứa riêng các tệp website trưng bày. GitHub Pages được cấu hình từ branch `main`, thư mục root. Sau khi cập nhật, chờ Pages triển khai rồi mở URL công khai để kiểm tra trang và nút demo.

Website chỉ hiển thị nội dung tĩnh, không kết nối Agent thật hoặc API.
