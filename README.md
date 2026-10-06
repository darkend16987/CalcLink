# CalcLink

Plugin cho **AutoCAD 2024** đưa bảng từ **LibreOffice Calc** vào bản vẽ thành **bảng AutoCAD thật**: giữ ô gộp, viền, màu, cỡ chữ; liên kết với file `.ods` và cập nhật bằng một lệnh (`CALCUPDATE`).

- **Trang giới thiệu & tải về:** <https://darkend16987.github.io/CalcLink/>
- **Tải bản mới nhất:** <https://github.com/darkend16987/CalcLink/releases/latest>
- **Hướng dẫn sử dụng:** <https://darkend16987.github.io/CalcLink/huong-dan.html>
- **Báo lỗi / góp ý:** [GitHub Issues](https://github.com/darkend16987/CalcLink/issues)

Kho này **chỉ chứa trang web và bản phát hành** (gói cài đặt). Không có mã nguồn của plugin ở đây.

## Mỗi bản phát hành có gì

| File | Dùng để làm gì |
| --- | --- |
| `CalcLink.bundle.zip` | Gói cài đặt: `CalcLink.bundle` (DLL, `PackageContents.xml`, `install.ps1`, `HUONG_DAN.md`) |
| `SHA256SUMS.txt` | Checksum để đối chiếu file tải về |

Cài đặt: giải nén, mở PowerShell trong thư mục `CalcLink.bundle`, chạy
`powershell -ExecutionPolicy Bypass -File install.ps1`. Chi tiết (kể cả Trusted Locations) trong [hướng dẫn](https://darkend16987.github.io/CalcLink/huong-dan.html).

## Yêu cầu

AutoCAD 2024 bản đầy đủ (R24.0–R24.3, không chạy trên AutoCAD LT), Windows 64-bit. Không cần Excel.

## Trạng thái

Bản thử nghiệm. Các phần chạy trên giao diện AutoCAD (nhấp đúp mở nguồn, nhắc/tự cập nhật khi Save) mới được kiểm bằng test tự động, chưa kiểm trên giao diện. Gói chưa ký số.

## Cấu trúc kho (trang web)

`index.html`, `huong-dan.html` (hiển thị `HUONG_DAN.md`), `lich-su-phien-ban.html`, `chinh-sach.html`, `app.js`, `styles.css`, `assets/`. Trang tĩnh, chạy trên GitHub Pages (nhánh `main`, thư mục gốc).
