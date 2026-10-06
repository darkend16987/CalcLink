# CalcLink – Hướng dẫn sử dụng (v0.4)

CalcLink đưa bảng từ **LibreOffice Calc** vào **AutoCAD 2024** thành **bảng AutoCAD thật**. Bảng giữ được **ô gộp (merge)** và định dạng: đậm, nghiêng, gạch chân, căn lề, màu nền, màu chữ, độ rộng cột, **viền ô** và **cỡ chữ**. Bảng cũng có thể **liên kết** với file .ods, dùng giống OLE:
- **nhấp đúp** vào bảng để mở file trong Calc, đúng vùng đang link;
- sửa, rồi **Save**;
- CAD **nhắc** cập nhật, hoặc **tự cập nhật** nếu bật trong CALCLINKOPT.

Khác với OLE, bảng vẫn là bảng AutoCAD thật: snap được, in nét, không cần cài LibreOffice trên máy chỉ xem bản vẽ.

Yêu cầu: AutoCAD 2024 bản đầy đủ (không dùng được trên AutoCAD LT). Không cần Excel. Khi cập nhật cũng không cần mở LibreOffice.

## 1. Cài đặt
**Cách A – tự nạp mỗi lần mở AutoCAD (khuyên dùng):**
1. Đóng AutoCAD.
2. Giải nén `CalcLink.bundle.zip`, mở PowerShell trong thư mục `CalcLink.bundle` rồi chạy:
   `powershell -ExecutionPolicy Bypass -File install.ps1`
   (IT cài cho mọi người dùng thì thêm `-AllUsers`, cần quyền admin. Gỡ cài đặt thì thêm `-Uninstall`.)
3. Cài theo người dùng: vào **Options → Files → Trusted Locations** và thêm thư mục
   `%APPDATA%\Autodesk\ApplicationPlugins\CalcLink.bundle\Contents` để AutoCAD không hỏi bảo mật mỗi lần mở.
   (Cài `-AllUsers` vào ProgramData thì AutoCAD đã tin cậy sẵn.)

**Cách B – nạp tay:** gõ `NETLOAD` rồi chọn `CalcLink.dll`. Nếu có hộp thoại bảo mật thì chọn Load.

Khi nạp xong, dòng lệnh báo: *CalcLink đã nạp. Lệnh: CALCPASTE, CALCLINK, ...*

## 2. Các lệnh
| Lệnh | Việc làm |
|------|----------|
| `CALCPASTE` | Dán vùng ô vừa copy (Ctrl+C) trong Calc. Nếu file đã lưu dạng .ods, lệnh hỏi có **liên kết** không. |
| `CALCLINK` | Tạo bảng liên kết bằng cách chọn file .ods, sheet và vùng. Không cần mở Calc. |
| `CALCUPDATE` | Cập nhật bảng liên kết theo file đã lưu. Chọn bảng, hoặc **Enter = tất cả** bảng liên kết trong bản vẽ. Sau đó chọn **Giu** (giữ kích thước đã chỉnh trong CAD, mặc định) hoặc **Calc** (về như lúc mới link). |
| `CALCEDIT` | Mở file nguồn của bảng liên kết trong Calc, chọn sẵn vùng đang link. **Nhấp đúp** vào bảng liên kết cũng làm việc này. |
| `CALCLINKINFO` | Xem nguồn của bảng (file, sheet, vùng), thời điểm cập nhật, file nguồn đã thay đổi hay chưa. |
| `CALCUNLINK` | Bỏ liên kết: bảng thành bảng thường, sửa tay được. |
| `CALCRELINK` | Đổi file nguồn khi file bị di chuyển hay đổi tên. Có thể đổi sheet và vùng. |
| `CALCLINKOPT` | Tuỳ chọn: khi file nguồn được Save thì **Tat** (không theo dõi), **Nhac** (mặc định) hoặc **Tudong** (tự cập nhật); nhấp đúp có mở nguồn hay không. Tuỳ chọn được nhớ cho lần sau. |

### Dán (có hoặc không liên kết)
1. Trong Calc: bôi đen vùng ô, **Ctrl+C**.
2. Trong AutoCAD: gõ `CALCPASTE`, rồi trả lời:
   - `Table style`: Enter để dùng style hiện hành.
   - `Dòng đầu là tiêu đề cột? [Co/Khong]`
   - `Lấy định dạng và độ rộng cột từ Calc? [Co/Khong]`: chọn **Khong** thì định dạng theo Table Style, ô gộp **vẫn được giữ**.
   - `Liên kết với file nguồn? [Co/Khong]`: chỉ hỏi khi file đang copy đã được lưu dạng `.ods`.
   - `Chiều cao chữ`, `Điểm chèn bảng`.
3. Gõ `U` để huỷ bảng vừa dán.

Khi liên kết:
- Nếu vùng copy trùng một **tên vùng** (Named Range) trong Calc thì link theo tên. Nếu không, link theo địa chỉ (ví dụ `B2:C4`).
- Bảng được tạo theo **nội dung đã lưu** của file. Nếu trong Calc có sửa mà chưa Save, CALCPASTE sẽ báo để bạn Save rồi `CALCUPDATE`.

### Tạo link bằng CALCLINK (không cần mở Calc)
1. Gõ `CALCLINK` rồi chọn file `.ods`.
2. Nếu file có nhiều sheet: gõ tên hoặc số thứ tự của sheet (Enter = sheet đầu tiên).
3. `Vùng ô`: gõ địa chỉ (ví dụ `A1:F20`), hoặc gõ **tên vùng** (lệnh liệt kê sẵn các tên vùng của sheet), hoặc **Enter = vùng đã dùng** (vùng nhỏ nhất bao hết các ô có dữ liệu). Nếu địa chỉ bạn gõ trùng một tên vùng, lệnh tự chuyển sang link theo tên.
4. Các câu hỏi còn lại giống CALCPASTE.

### Đổi nguồn bằng CALCRELINK
Chọn bảng, chọn file `.ods` mới, rồi trả lời sheet và vùng:
- Enter: giữ sheet/vùng hiện tại;
- `*`: dùng vùng đã dùng.

Cuối cùng chọn `Cập nhật bảng ngay? [Co/Khong]`.

### Sửa và cập nhật (giống OLE)
1. **Nhấp đúp** vào bảng liên kết, hoặc gõ `CALCEDIT` rồi chọn bảng. Calc mở file nguồn và chọn sẵn vùng đang link (kể cả khi file đã mở sẵn).
2. Sửa bảng trong Calc (đổi chữ, thêm/bớt dòng, gộp/bỏ gộp ô, đổi viền, cỡ chữ) rồi **Save** (Ctrl+S, giữ dạng .ods).
3. Quay lại AutoCAD. Theo mặc định, dòng lệnh báo *"CalcLink: "bang.ods" vừa được lưu - 1 bảng liên kết cần cập nhật. Gõ CALCUPDATE."*. Gõ `CALCUPDATE`, Enter.
   - Nếu `CALCLINKOPT` đặt **Tudong**: bảng tự cập nhật khi AutoCAD rảnh. Gõ `U` nếu muốn huỷ lần cập nhật đó.
   - Nếu bản vẽ đang chạy một lệnh khác, thông báo và việc tự cập nhật sẽ đợi lệnh đó xong.

Khi mở một bản vẽ có bảng liên kết mà file nguồn đã sửa sau lần cập nhật cuối, dòng lệnh cũng nhắc gõ `CALCUPDATE`.

### Thu nhỏ bảng cho vừa khung tên (giữ kích thước khi cập nhật)
Sau khi chọn bảng, `CALCUPDATE` hỏi:

`Kích thước bảng: Giu = giữ như đã chỉnh trong CAD ..., Calc = như lúc mới link [Giu/Calc] <Giu>:`

- **Giu** (Enter): giữ những gì bạn đã chỉnh trong CAD, gồm:
  - tỉ lệ khi dùng `SCALE` (ví dụ 0,5);
  - độ rộng các cột bạn đã kéo;
  - chiều cao chữ bạn đã đổi.

  Nội dung, ô gộp, đậm/màu/viền vẫn cập nhật theo Calc. Dòng/cột mới thêm trong Calc cũng được thu nhỏ theo cùng tỉ lệ. Cột bạn **không** kéo tay vẫn theo độ rộng trong Calc (nhân với tỉ lệ).
- **Calc**: đưa bảng về đúng kích thước như lúc mới link: độ rộng, chiều cao, chữ, lề ô theo Calc và Table Style.

Lựa chọn được **nhớ theo từng bảng**: lần sau Enter là dùng lại. Tự cập nhật (`CALCLINKOPT` = Tudong) và `CALCRELINK` cũng dùng lựa chọn đã nhớ. `CALCLINKINFO` cho xem bảng đang để chế độ nào và tỉ lệ bao nhiêu.

Lưu ý:
- Nên thu nhỏ bằng `SCALE` cả bảng, **không** dùng lệnh `SCALE` lên từng ô.
- Nếu trong Calc bạn chèn/xoá **cột** ở giữa, độ rộng đã kéo tay được giữ theo **vị trí cột** (cột thứ 2 vẫn rộng như cũ), nên có thể cần kéo lại.

Ghi chú về nhấp đúp:
- Chỉ bảng **có liên kết** mới mở Calc. Bảng thường vẫn sửa ô như cũ.
- Muốn tắt: `CALCLINKOPT`, chọn `Khong` ở câu hỏi nhấp đúp.
- File trên ổ mạng dạng `\\server\...`: Calc vẫn mở file, nhưng chưa tự chọn vùng.

## 3. Nên làm
- **Đặt tên vùng cho bảng trong Calc**: bôi đen bảng, vào **Sheet → Named Ranges and Expressions → Define** (hoặc gõ tên vào ô Name Box). Khi chèn dòng bên trong bảng, tên vùng tự giãn, nên link không bị lệch. Link theo địa chỉ cố định như `A1:F20` thì không tự giãn.
- **Để file .ods và DWG trong cùng thư mục dự án** (hoặc thư mục con). CalcLink lưu cả đường dẫn tương đối, nên khi chuyển cả thư mục dự án sang chỗ khác vẫn tìm được file. Ổ mạng nên dùng đường dẫn `\\server\...`.
- Luôn **Save trong Calc trước khi CALCUPDATE**: CalcLink đọc nội dung đã lưu, không đọc được phần đang sửa dở.

## 4. Lưu ý
- Ô trong bảng liên kết bị **khoá nội dung**, vì sửa tay sẽ bị ghi đè khi cập nhật (giống Data Link của AutoCAD). Muốn sửa tay thì `CALCUNLINK` trước.
- Khi cập nhật, bảng giữ vị trí, layer và Table Style. Kích thước (tỉ lệ, độ rộng cột kéo tay, chiều cao chữ) được giữ khi chọn **Giu** (mặc định). Xem mục "Thu nhỏ bảng cho vừa khung tên".
- Dòng/cột **đang ẩn** trong Calc không được đưa vào bảng.
- Chữ đậm/nghiêng chỉ hiện khi text style của bảng dùng font TrueType (như Arial); với font `.shx` thì bỏ qua. Chữ đậm chỉ một phần trong ô sẽ thành chữ thường.
- **Viền ô** (khi chọn "Co" lấy định dạng):
  - Viền được mang sang theo đúng cách Calc vẽ: độ dày gần nhất (mảnh 0,25 mm, vừa 0,60 mm, dày 0,90 mm), màu, nét đôi. Ô gộp lấy viền của ô góc trên trái.
  - Viền **đen** thành màu **ByBlock** (theo màu bảng), để không bị "mất" trên nền đen của Model.
  - Nét đứt/chấm thành nét liền.
  - Độ dày nét chỉ hiện khi in, hoặc khi bật LWDISPLAY.
  - Vùng không có viền nào trong Calc thì bảng giữ lưới của Table Style như trước.
- **Cỡ chữ**:
  - "Chiều cao chữ" bạn nhập ứng với cỡ chữ mặc định của Calc (10 pt); ô cỡ khác được nhân theo tỉ lệ (14 pt → x1,4).
  - Dán không liên kết (qua HTML) chỉ có 7 cỡ chữ (7, 10, 12, 14, 18, 24, 36 pt), ví dụ 8 pt thành 7 pt. Bảng liên kết thì đúng cỡ.
- Không mang sang: tên font (lấy theo Table Style), định dạng có điều kiện.
- Số và ngày được đưa vào đúng như đang hiển thị trong Calc (ví dụ `1,234.50`, `25.00%`).
- Chỉ liên kết được với file `.ods`. Với file .xlsx đang mở trong Calc, hãy Save As sang .ods.
- Theo dõi Save chỉ chạy khi bản vẽ đang mở. Trên ổ mạng, Windows có thể không báo thay đổi; khi đó vẫn còn thông báo lúc mở bản vẽ và lệnh `CALCUPDATE`.
- Tuỳ chọn của `CALCLINKOPT` lưu ở `%APPDATA%\CalcLink\settings.ini`. CalcLink không sửa cài đặt nào của AutoCAD.
- Vẫn muốn dùng OLE thật (ảnh của bảng Calc)? AutoCAD có sẵn lệnh `INSERTOBJ` → "OpenDocument Spreadsheet", không cần CalcLink. Nhược điểm của OLE: in dạng ảnh, không snap được, khó quản lý đường dẫn khi chuyển thư mục.
- CALC2TB (LISP cũ) vẫn dùng được như trước.

## 5. Báo lỗi
Gửi nguyên văn thông báo ở dòng lệnh, kèm file .ods (hoặc vùng ô) gây lỗi.
