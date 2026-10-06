// CalcLink landing — feature grid + live download links (cùng cách làm với trang Nabu PDF).
document.getElementById("year").textContent = new Date().getFullYear();

const REPO = "darkend16987/CalcLink";

// Biểu tượng (Lucide, ISC) dùng lại cùng bộ với trang Nabu PDF.
const I = {
  table: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 9v12"/>',
  merge: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  paint: '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  scale: '<path d="M21 3 14 10"/><path d="M3 21l7-7"/><path d="M9 21H3v-6"/><path d="M15 3h6v6"/>',
  pointer: '<path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
};

// Tổng quan, không phải hướng dẫn: mỗi thẻ trả lời "làm được gì cho tôi" trong một-hai câu.
// Chi tiết cách dùng nằm ở huong-dan.html. Mọi mục đều lấy từ tính năng đã có và đã kiểm trong NOTES.md của dự án.
const FEATURES = [
  { i: "merge", t: "Dán giữ nguyên ô gộp", d: "CALCPASTE tạo bảng AutoCAD thật từ vùng ô vừa copy, giữ ô gộp ngang, dọc và cả hai chiều. Vùng copy cắt ngang một ô gộp hay đi qua dòng/cột ẩn cũng được xử lý (đã đối chiếu với dữ liệu thật do Calc xuất)." },
  { i: "paint", t: "Định dạng như trong Calc", d: "Đậm, nghiêng, gạch chân, căn lề ngang/dọc, màu nền, màu chữ, độ rộng cột. Số, ngày, phần trăm hiện đúng như đang hiển thị trong Calc." },
  { i: "table", t: "Viền ô và cỡ chữ", d: "Viền mang sang theo đúng cách Calc vẽ: độ dày, màu, nét đôi, cạnh chung giữa hai ô và viền quanh ô gộp. Ô cỡ chữ lớn hơn hay nhỏ hơn được nhân theo tỉ lệ so với chữ mặc định." },
  { i: "link", t: "Liên kết với file .ods", d: "Dán kèm liên kết, hoặc CALCLINK để chọn file, sheet và vùng ngay trong AutoCAD, không cần mở Calc. Đọc trực tiếp file .ods nên không cần Excel." },
  { i: "refresh", t: "Cập nhật bằng một lệnh", d: "CALCUPDATE cập nhật bảng theo file đã lưu: đổi chữ, thêm bớt dòng, gộp hay bỏ gộp ô. Enter là cập nhật mọi bảng liên kết trong bản vẽ." },
  { i: "tag", t: "Link theo tên vùng", d: "Đặt tên vùng (Named Range) trong Calc: chèn dòng vào giữa bảng thì tên vùng tự giãn, link không bị lệch. Vùng trùng một tên vùng được nhận ra và link theo tên." },
  { i: "scale", t: "Giữ kích thước đã chỉnh trong CAD", d: "SCALE bảng cho vừa khung tên, kéo hẹp cột, đổi chiều cao chữ — cập nhật không đẩy bảng về cỡ cũ. Muốn về như Calc thì chọn Calc. Lựa chọn nhớ theo từng bảng." },
  { i: "pointer", t: "Nhấp đúp để sửa nguồn", d: "Nhấp đúp vào bảng liên kết, hoặc CALCEDIT, để mở file trong Calc với đúng vùng đang link được chọn sẵn. (Thử nghiệm: chưa kiểm trên giao diện AutoCAD.)" },
  { i: "bell", t: "Nhắc khi file nguồn đổi", d: "Mở bản vẽ có bảng cũ hơn file nguồn thì được nhắc. Đang mở bản vẽ mà file được Save: nhắc gõ CALCUPDATE, hoặc tự cập nhật nếu bạn bật trong CALCLINKOPT. (Thử nghiệm.)" },
  { i: "folder", t: "Chuyển thư mục dự án vẫn tìm thấy file", d: "Link lưu cả đường dẫn tương đối so với bản vẽ, nên chuyển cả thư mục dự án sang chỗ khác vẫn tìm được file. File bị đổi tên: CALCRELINK để chọn lại, có thể đổi cả sheet và vùng." },
  { i: "lock", t: "Chống sửa nhầm", d: "Ô trong bảng liên kết bị khoá nội dung vì sửa tay sẽ bị ghi đè khi cập nhật. Cần sửa tay thì CALCUNLINK để bảng thành bảng thường. CALCLINKINFO cho biết nguồn và file đã đổi chưa." },
  { i: "shield", t: "Chạy cục bộ, không đổi cài đặt AutoCAD", d: "CalcLink không gọi mạng và không gửi dữ liệu đi. Bộ cài chỉ chép file, không đổi cài đặt bảo mật của AutoCAD." },
];

document.getElementById("feature-grid").innerHTML = FEATURES.map((f) => `
  <div class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-brand-300">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[f.i]}</svg>
    </div>
    <h3 class="mt-5 text-lg font-bold">${f.t}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-muted">${f.d}</p>
  </div>`).join("");

// Liên kết tải lấy từ release mới nhất trên GitHub; nếu API lỗi/hết lượt thì giữ href dự phòng đã có trong HTML
// (trang releases/latest).
fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
  .then((r) => (r.ok ? r.json() : Promise.reject()))
  .then((rel) => {
    const v = document.getElementById("dl-version");
    if (v && rel.tag_name) v.textContent = rel.tag_name;
    // Dải "Mới" mang cùng số phiên bản, lấy từ release để hai chỗ không bao giờ lệch nhau.
    const wn = document.getElementById("whatsnew-version");
    if (wn && rel.tag_name) wn.textContent = rel.tag_name;
    const assets = rel.assets || [];
    const zip = assets.find((a) => /^CalcLink\.bundle\.zip$/i.test(a.name));
    if (zip) document.getElementById("dl-installer").href = zip.browser_download_url;
    const sums = assets.find((a) => /^SHA256SUMS\.txt$/i.test(a.name));
    if (sums) document.getElementById("dl-sums").href = sums.browser_download_url;
  })
  .catch(() => {});
