import React from 'react';
import { PortfolioPost, StudentProfile } from '../types';
import { Download, Printer, Award, BookOpen, ExternalLink, CheckCircle2, ShieldCheck, Mail, Globe, MapPin, Sparkles, Lightbulb, Microscope, HeartHandshake, Briefcase, Activity } from 'lucide-react';

interface AdmissionsSummaryViewProps {
  profile: StudentProfile;
  posts: PortfolioPost[];
  onSelectSection: (section: any) => void;
  lang: 'en' | 'vi';
}

export const AdmissionsSummaryView: React.FC<AdmissionsSummaryViewProps> = ({
  profile,
  posts,
  onSelectSection,
  lang,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadResume = () => {
    const isVi = lang === 'vi';
    const text = isVi
      ? `===================================================================
HỒ SƠ ỨNG VIÊN HÓA HỌC & SÁNG CHẾ QUỐC TẾ - TÔN ĐỨC MINH
Trường THPT Chuyên Hà Nội - Amsterdam (Lớp 12 Chuyên Hóa 1)
===================================================================

THÔNG TIN ỨNG VIÊN:
- Họ và tên: Tôn Đức Minh (Ton Duc Minh)
- Trường: Trường THPT Chuyên Hà Nội - Amsterdam, Việt Nam
- Lớp: 12 Chuyên Hóa 1
- Định hướng chuyên ngành: Kỹ thuật Hóa học / Hóa học Môi trường / Khoa học Vật liệu
- Email: ${profile.email}
- Địa chỉ: Hà Nội, Việt Nam

I. GIẢI THƯỞNG & THÀNH TÍCH HỌC THUẬT (XẾP THEO THỨ TỰ ƯU TIÊN)
1. Giải thưởng kép (Huy chương Vàng & Giải Phát minh Quốc tế Xuất sắc nhất) — Japan Design, Idea and Invention Expo (JDIE 2025)
   - Đơn vị trao giải: Hiệp hội Sở hữu Trí tuệ Nhật Bản (JIPA) & WIIPA tại Tokyo, Nhật Bản.
2. Huy chương Vàng — International Creative Papers Conference & Olympic (ICPC 2026 Korea)
   - Đơn vị trao giải: Hội đồng Hội nghị Bài báo Sáng tạo Quốc tế tại Seoul, Hàn Quốc.
3. Huy chương Vàng & Giải thưởng Đặc biệt về Đổi mới Bền vững — International Invention Innovation Competition in Canada (ICAN 2026)
   - Đơn vị trao giải: Hiệp hội Đổi mới & Kỹ năng Tiên tiến Quốc tế Toronto (TISIAS), Toronto, Canada.
4. Huy chương Vàng Sáng tạo Công nghệ — Advanced Invention & Innovation Contest (AIJAM 2026)
   - Đơn vị trao giải: Cuộc thi Sáng chế Thung lũng Silicon (Silicon Valley, California, Hoa Kỳ).
5. Giải Nhất / High Distinction Excellence — International Chemistry Quiz (ICQ 2025)
   - Đơn vị tổ chức: Viện Hóa học Hoàng gia Úc (RACI, Australia).
6. Giải Vàng (Gold Award) — Cambridge Chemistry Challenge (C3L6 2025)
   - Đơn vị tổ chức: Đại học Cambridge & Cao đẳng St Catharine's, Vương quốc Anh.
7. Giải Vàng (Gold Award) — UK Chemistry Olympiad (UKChO 2026)
   - Đơn vị tổ chức: Hiệp hội Hóa học Hoàng gia Anh (RSC UK), Vương quốc Anh.
8. Giải Ba Học sinh Giỏi Thành phố Hà Nội môn Hóa học (2025)
   - Đơn vị tổ chức: Sở Giáo dục và Đào tạo Hà Nội (Hanoi DOET).

II. SẢN PHẨM & DỰ ÁN ỨNG DỤNG
1. Sáng lập viên — Invisible Traces (09/2024 - Hiện tại)
   - Kết nối Hóa học và Nhiếp ảnh để Giải mã Khoa học Di sản Văn hóa & Thúc đẩy Thực hành Hóa học Bền vững. Khảo sát điền dã làng nghề truyền thống, đề xuất chất cắn màu sinh học an toàn và xây dựng website tương tác.
2. Nghiên cứu viên Phát triển — Ứng dụng Quang xúc tác và Vật liệu Nanocomposite để Xử lý Chất màu Ô nhiễm trong Nước thải Công nghiệp (03/2026 - 06/2026)
   - Phòng Thí nghiệm Nghiên cứu, Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST). Chế tạo nanocomposite ZnO/g-C3N4 phân hủy quang xúc tác thuốc nhuộm.
3. Nghiên cứu viên Phát triển — Nghiên cứu Tổng hợp, Đặc trưng và Ứng dụng Hấp phụ Thuốc nhuộm của Vật liệu Tổ hợp HAP/PANI trong Xử lý Nước thải (07/2026 - 08/2026)
   - Phòng Thí nghiệm Hóa học, Trường Đại học Sư phạm Hà Nội (HNUE). Khảo sát dung lượng hấp phụ theo mô hình đẳng nhiệt Langmuir/Freundlich.

III. NGHIÊN CỨU KHOA HỌC & CÔNG BỐ
1. Đồng tác giả bài báo khoa học đã công bố trên Tạp chí Khoa học & Phát triển Bền vững (SASD)
   - Đề tài: Nghiên cứu sự tích tụ kim loại vết trên vi nhựa qua trung gian màng sinh học (biofilms) trong mẫu trầm tích và đánh giá rủi ro môi trường.
   - Cố vấn: ThS. Mai Văn Phong, Trường Đại học Bách khoa Hà Nội (HUST).
2. Đồng tác giả — Nghiên cứu Vật liệu Chức năng Tiên tiến cho Xúc tác Môi trường và Xử lý Nguồn nước (Đang hoàn thiện bản thảo 2026)

IV. HOẠT ĐỘNG NGOẠI KHÓA & NĂNG LỰC LÃNH ĐẠO (ECA)
1. Đồng sáng lập — Dự án CodeFuture Việt Nam (Dạy lập trình Scratch & tư duy logic cho học sinh tiểu học).
2. Trưởng ban Vận hành & MC — Dự án Dưỡng Tâm (Tổ chức workshop chăm sóc tinh thần người cao tuổi tại các viện dưỡng lão Hà Nội).
3. Đồng sáng lập & Sáng tạo nội dung — Kênh TikTok Bảo Tồn Làng Nghề Truyền Thống (Video giải mã hóa học di sản làng nghề).
4. Diễn giả Khách mời — High School Help Kit: Unboxing Day 2024 (Chia sẻ phương pháp học chuyên Hóa và NCKH cho học sinh THPT).
5. Thành viên Ban Nhân sự — CLB Thiên văn học Amstronomy (THPT Chuyên Hà Nội - Amsterdam).

V. HOẠT ĐỘNG TÌNH NGUYỆN & PHỤNG SỰ CỘNG ĐỒNG
1. Thành viên — Sáng kiến Tình nguyện Cộng đồng C.A.R.E (11/2024 - Mạng lưới SV Việt Nam tại VN & Singapore).
2. Tình nguyện viên & Nhà tài trợ — Bệnh viện Nhi Trung ương (Gây quỹ và tài trợ chi phí phẫu thuật cho bệnh nhi khiếm thính bẩm sinh).
3. Tình nguyện viên — Chiến dịch Tình nguyện Đông Ấm 2025 tại Xã Lao Chải, Tuyên Quang (Đoàn trường ĐH Y Dược - ĐHQGHN).
4. Tình nguyện viên — Làng Trẻ em SOS Hải Phòng (05/2026 - Hướng dẫn STEM và sinh hoạt kỹ năng sống).

VI. KINH NGHIỆM LÀM VIỆC & THỰC TẬP KỸ THUẬT
1. Thực tập sinh Kỹ thuật — Công ty Cổ phần Supe Phốt phát và Hóa chất Lâm Thao (Khảo sát hệ thống môi trường công nghiệp, QC và an toàn hóa chất).
2. Trợ lý Phòng Thí nghiệm — Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST) (Thực nghiệm quang xúc tác và phân tích động học phản ứng).
`
      : `===================================================================
TON DUC MINH - INTERNATIONAL CHEMISTRY CANDIDATE DOSSIER
Hanoi - Amsterdam High School for the Gifted (12 Chemistry 1)
===================================================================

ACADEMIC PROFILE:
- Full Name: Ton Duc Minh (Tôn Đức Minh)
- High School: Hanoi - Amsterdam High School for the Gifted, Vietnam
- Class: 12 Chemistry 1 (Specialized Chemistry Class)
- Target Majors: Chemical Engineering / Environmental Chemistry / Materials Science
- Email: ${profile.email}
- Location: Hanoi, Vietnam

I. HONORS & ACADEMIC DISTINCTIONS (IN ORDER OF PRECEDENCE)
1. Double Award (Gold Medal & Grand International Invention Award) — Japan Design, Idea and Invention Expo (JDIE 2025)
   - Awarding Body: Japan Intellectual Property Association (JIPA) & WIIPA, Tokyo, Japan.
2. Gold Medal — International Creative Papers Conference & Olympic (ICPC 2026 Korea)
   - Awarding Body: International Creative Papers Conference Committee, Seoul, South Korea.
3. Gold Medal & Special Award for Sustainable Innovation — International Invention Innovation Competition in Canada (ICAN 2026)
   - Awarding Body: Toronto International Society of Innovation & Advanced Skills (TISIAS), Toronto, Canada.
4. Gold Award — Advanced Invention & Innovation Contest (AIJAM 2026)
   - Awarding Body: Silicon Valley Invention Committee, California, USA.
5. First Prize / High Distinction Excellence — International Chemistry Quiz (ICQ 2025)
   - Awarding Body: Royal Australian Chemical Institute (RACI), Australia.
6. Gold Award — Cambridge Chemistry Challenge (C3L6 2025)
   - Awarding Body: University of Cambridge & St Catharine's College, United Kingdom.
7. Gold Award — UK Chemistry Olympiad (UKChO 2026)
   - Awarding Body: Royal Society of Chemistry (RSC UK), London, United Kingdom.
8. Third Prize — Hanoi City High School Chemistry Olympiad (2025)
   - Awarding Body: Hanoi Department of Education and Training (Hanoi DOET).

II. PRODUCTS & APPLIED PROJECTS
1. Founder — Invisible Traces (Sep 2024 - Present)
   - Bridging Chemistry and Photography to Uncover the Science Behind Cultural Heritage and Promote Sustainable Chemical Practices. Field research, formulating bio-mordants, interactive digital archive.
2. Developer — Using Photocatalysis and Nanocomposite Materials to Degrade Industrial Dye Pollutants in Wastewater (Mar 2026 - June 2026)
   - Research Laboratory, Chemistry Department, Hanoi University of Science and Technology (HUST). Synthesized ZnO/g-C3N4 nanocomposites for photocatalytic dye degradation.
3. Developer — Investigated the synthesis, properties, and dye adsorption applications of HAP/PANI composite materials for wastewater treatment (July 2026 - Aug 2026)
   - Research Laboratory, Chemistry Department, Hanoi National University of Education (HNUE). Evaluated adsorption capacity using Langmuir & Freundlich isotherm models.

III. SCIENTIFIC RESEARCH & PUBLICATIONS
1. Co-Author — Published in Journal of Science and Sustainable Development (SASD)
   - Topic: Investigated trace metal accumulation on microplastics mediated by biofilms in sediment samples and assessed associated environmental risks.
   - Mentor: Mai Van Phong, Hanoi University of Science and Technology (HUST).
2. Co-Author — Advanced Functional Materials for Environmental Catalysis and Water Remediation (Manuscript in Preparation 2026)

IV. EXTRACURRICULAR ACTIVITIES & LEADERSHIP (ECA)
1. Co-Founder — CodeFuture Vietnam (Taught Scratch coding and logic thinking fundamentals to elementary school students).
2. Head of Operations & MC — Duong Tam Project (Organized emotional well-being workshops for elderly residents in care centers).
3. Co-Founder & Content Creator — TikTok Channel for Traditional Craft Village Conservation (Short-form videos promoting heritage chemistry).
4. Guest Speaker — High School Help Kit: Unboxing Day 2024 (Delivered keynote on Chemistry Olympiad and scientific research methods).
5. Human Resources Member — Amstronomy: Hanoi - Amsterdam Astronomy Club.

V. VOLUNTEER & COMMUNITY SERVICE
1. Member — C.A.R.E Community Initiative (Nov 2024 - Vietnam & Singapore Student Associations).
2. Volunteer & Donor — National Children’s Hospital (Fundraising and medical sponsorship for hearing-impaired child).
3. Volunteer — Warm Winter 2025 in Lao Chai Commune, Tuyen Quang (VNU University of Medicine & Pharmacy Youth Union).
4. Volunteer — SOS Children’s Village Hai Phong (May 2026 - STEM workshops and child mentorship).

VI. WORK EXPERIENCE & INTERNSHIPS
1. Technical Intern — Lam Thao Fertilizers and Chemicals Joint Stock Company (Studied industrial safety, QC testing, and environmental treatment).
2. Lab Assistant — Chemistry Department, Hanoi University of Science and Technology (HUST) (Conducted photocatalysis assays and kinetic degradation modeling).
`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isVi
      ? 'Ton_Duc_Minh_Ho_So_Ung_Vien_Chuyen_Hoa.txt'
      : 'Ton_Duc_Minh_Chemistry_Portfolio_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const isVi = lang === 'vi';

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      
      {/* Top Banner & Export Actions */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs no-print">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold font-mono">
                {isVi ? 'Hồ Sơ Tổng Hợp Tuyển Sinh' : 'Candidate Dossier View'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {isVi ? 'Bản tóm tắt toàn diện thành tích học thuật & nghiên cứu' : 'International Academic & Research Summary'}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
              {isVi ? 'Hồ Sơ Đánh Giá Năng Lực Hóa Học & Sáng Chế' : 'Chemistry & Innovation Evaluation Dossier'}
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              {isVi
                ? 'Tổng hợp súc tích và chuẩn mực toàn bộ các giải thưởng quốc tế, dự án hóa học di sản và môi trường, bài báo khoa học đã công bố và kinh nghiệm thực tập của Tôn Đức Minh.'
                : 'Consolidated executive summary of Ton Duc Minh\'s international chemistry awards, environmental photocatalysis projects, published research, and community leadership.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>{isVi ? 'In / Xuất PDF' : 'Print / Export PDF'}</span>
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{isVi ? 'Tải Hồ Sơ (Text)' : 'Download Dossier'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Candidate Resume Sheet */}
      <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0">
        
        {/* Dossier Header */}
        <div className="border-b-2 border-slate-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800">
              {isVi ? 'Hồ Sơ Tuyển Sinh • Khóa 2025' : 'Candidate Dossier • Class of 2025'}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {isVi ? 'TÔN ĐỨC MINH (Ton Duc Minh)' : 'TON DUC MINH (Tôn Đức Minh)'}
            </h1>
            <p className="text-sm font-semibold text-slate-700 mt-0.5">
              {isVi
                ? 'Lớp 12 Chuyên Hóa 1 • Trường THPT Chuyên Hà Nội - Amsterdam'
                : 'Class 12 Chemistry 1 • Hanoi - Amsterdam High School for the Gifted'}
            </p>
          </div>

          <div className="text-left md:text-right text-xs text-slate-600 space-y-0.5 font-medium">
            <p className="flex items-center md:justify-end gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {isVi ? 'Hà Nội, Việt Nam' : 'Hanoi, Vietnam'}
            </p>
            <p className="flex items-center md:justify-end gap-1">
              <Mail className="w-3.5 h-3.5 text-teal-600" /> {profile.email}
            </p>
            <p className="text-teal-800 font-bold">
              {isVi
                ? 'Định hướng: Kỹ thuật Hóa học • Vật liệu Nanocomposite Môi trường'
                : 'Focus: Chemical Engineering • Environmental Nanomaterials'}
            </p>
          </div>
        </div>

        {/* 1. Honors & Distinction Table */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              {isVi ? 'I. Thành Tích & Giải Thưởng Học Thuật Quốc Tế' : 'I. Honors & International Distinctions'}
            </h3>
            <button onClick={() => onSelectSection('honors')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50 text-slate-700 font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">{isVi ? 'Tên Giải Thưởng & Cuộc Thi' : 'Award / Distinction Title'}</th>
                  <th className="py-2.5 px-3">{isVi ? 'Cấp Bậc' : 'Level / Scope'}</th>
                  <th className="py-2.5 px-3">{isVi ? 'Đơn Vị Trao Giải & Địa Điểm' : 'Awarding Body & Location'}</th>
                  <th className="py-2.5 px-3">{isVi ? 'Năm' : 'Year'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* 1. JDIE 2025 */}
                <tr className="bg-amber-50/50">
                  <td className="py-2.5 px-3 font-mono font-bold text-amber-900">1</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Giải thưởng kép: Huy chương Vàng & Giải Phát minh Quốc tế Xuất sắc nhất — Japan Design, Idea and Invention Expo (JDIE 2025)'
                      : 'Double Award (Gold Medal & Grand International Invention Award) — Japan Design, Idea and Invention Expo (JDIE 2025)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-amber-200 text-amber-900 font-bold rounded">
                      {isVi ? 'Toàn cầu' : 'Global'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700">
                    {isVi
                      ? 'Hiệp hội Sở hữu Trí tuệ Nhật Bản (JIPA) & WIIPA (Tokyo, Nhật Bản) • 366 đội / 25 quốc gia'
                      : 'Japan Intellectual Property Association (JIPA) & WIIPA (Tokyo, Japan) • 366 teams / 25 countries'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-bold">2025</td>
                </tr>

                {/* 2. ICPC 2026 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">2</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Huy chương Vàng — International Creative Papers Conference & Olympic (ICPC 2026 Korea)'
                      : 'Gold Medal — International Creative Papers Conference & Olympic (ICPC 2026 Korea)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded">
                      {isVi ? 'Toàn cầu' : 'Global'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Hội đồng Hội nghị Bài báo Sáng tạo Quốc tế (Seoul, Hàn Quốc)'
                      : 'International Creative Papers Conference Committee (Seoul, South Korea)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2026</td>
                </tr>

                {/* 3. ICAN 2026 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">3</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Huy chương Vàng & Giải thưởng Đặc biệt về Đổi mới Bền vững — International Invention Innovation Competition in Canada (ICAN 2026)'
                      : 'Gold Medal & Special Award for Sustainable Innovation — International Invention Innovation Competition in Canada (ICAN 2026)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded">
                      {isVi ? 'Toàn cầu' : 'Global'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Hiệp hội Đổi mới & Kỹ năng Tiên tiến Quốc tế Toronto (TISIAS, Toronto, Canada)'
                      : 'Toronto International Society of Innovation & Advanced Skills (TISIAS, Toronto, Canada)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2026</td>
                </tr>

                {/* 4. AIJAM 2026 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">4</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Huy chương Vàng Sáng tạo Công nghệ — Advanced Invention & Innovation Contest (AIJAM 2026)'
                      : 'Gold Award — Advanced Invention & Innovation Contest (AIJAM 2026)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded">
                      {isVi ? 'Toàn cầu' : 'Global'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Ban tổ chức Sáng chế Thung lũng Silicon (Silicon Valley, California, Hoa Kỳ)'
                      : 'Silicon Valley Invention Committee (Silicon Valley, California, USA)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2026</td>
                </tr>

                {/* 5. ICQ 2025 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">5</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Giải Nhất (High Distinction Excellence) — International Chemistry Quiz (ICQ 2025)'
                      : 'First Prize / High Distinction Excellence — International Chemistry Quiz (ICQ 2025)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-900 font-bold rounded">
                      {isVi ? 'Quốc tế' : 'International'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Viện Hóa học Hoàng gia Úc (RACI, Australia)'
                      : 'Royal Australian Chemical Institute (RACI, Australia)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2025</td>
                </tr>

                {/* 6. C3L6 2025 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">6</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Giải Vàng (Gold Award) — Cambridge Chemistry Challenge (C3L6 2025)'
                      : 'Gold Award — Cambridge Chemistry Challenge (C3L6 2025)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-900 font-bold rounded">
                      {isVi ? 'Quốc tế' : 'International'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? "Đại học Cambridge & Cao đẳng St Catharine's (Vương quốc Anh)"
                      : "University of Cambridge & St Catharine's College (United Kingdom)"}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2025</td>
                </tr>

                {/* 7. UKChO 2026 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">7</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Giải Vàng (Gold Award) — UK Chemistry Olympiad (UKChO 2026)'
                      : 'Gold Award — UK Chemistry Olympiad (UKChO 2026)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-900 font-bold rounded">
                      {isVi ? 'Quốc tế' : 'International'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Hiệp hội Hóa học Hoàng gia Anh (RSC UK, Luân Đôn, Vương quốc Anh)'
                      : 'Royal Society of Chemistry (RSC UK, London, United Kingdom)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2026</td>
                </tr>

                {/* 8. Hanoi City 2025 */}
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-700">8</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    {isVi
                      ? 'Giải Ba Học sinh Giỏi Thành phố Hà Nội môn Hóa học (2025)'
                      : 'Third Prize — Hanoi City High School Chemistry Olympiad (2025)'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded">
                      {isVi ? 'Cấp Thành phố' : 'Municipal / City'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {isVi
                      ? 'Sở Giáo dục và Đào tạo Hà Nội (Hanoi DOET)'
                      : 'Hanoi Department of Education and Training (Hanoi DOET)'}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold">2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Products & Projects */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-teal-700" />
              {isVi ? 'II. Sản Phẩm & Dự Án Ứng Dụng Thực Tiễn' : 'II. Products & Applied Projects'}
            </h3>
            <button onClick={() => onSelectSection('projects')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi ? '1. Sáng lập viên — Invisible Traces' : '1. Founder — Invisible Traces'}
                </span>
                <span className="text-xs font-mono text-teal-800 font-bold">
                  {isVi ? '09/2024 - Hiện tại' : 'Sep 2024 - Present'}
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1 font-medium">
                {isVi
                  ? 'Kết nối Hóa học và Nhiếp ảnh để Giải mã Khoa học Di sản Văn hóa & Thúc đẩy Thực hành Hóa học Bền vững.'
                  : 'Bridging Chemistry and Photography to Uncover the Science Behind Cultural Heritage and Promote Sustainable Chemical Practices.'}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Khảo sát điền dã và tư liệu hóa các làng nghề truyền thống trên khắp Việt Nam; phân tích cơ chế hóa học, phát triển chất cắn màu sinh học thay thế và xây dựng nền tảng website tương tác.'
                  : 'Traveled across Vietnam to document traditional craft practices through photography and field research; analyzed underlying chemistry, formulated eco-friendly alternatives, and developed an interactive digital archive.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi
                    ? '2. Nghiên cứu viên Phát triển — Ứng dụng Quang xúc tác và Vật liệu Nanocomposite để Xử lý Chất màu Ô nhiễm trong Nước thải Công nghiệp'
                    : '2. Developer — Using Photocatalysis and Nanocomposite Materials to Degrade Industrial Dye Pollutants in Wastewater'}
                </span>
                <span className="text-xs font-mono text-teal-800 font-bold">
                  {isVi ? '03/2026 - 06/2026' : 'Mar 2026 - June 2026'}
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1 font-medium">
                {isVi
                  ? 'Phòng Thí nghiệm Nghiên cứu, Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST).'
                  : 'Research Laboratory, Chemistry Department, Hanoi University of Science and Technology (HUST).'}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Tổng hợp vật liệu nanocomposite dị thể ZnO/g-C3N4, đánh giá hiệu suất phân hủy quang xúc tác Methylene Blue dưới nguồn bức xạ UV và mô hình hóa hằng số tốc độ động học phản ứng.'
                  : 'Synthesized ZnO/g-C3N4 nanocomposites to degrade organic dye pollutants (Methylene Blue) under UV irradiation, plotting concentration decay curves and calculating reaction rate constants.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi
                    ? '3. Nghiên cứu viên Phát triển — Nghiên cứu Tổng hợp, Đặc trưng và Ứng dụng Hấp phụ Thuốc nhuộm của Vật liệu Tổ hợp HAP/PANI trong Xử lý Nước thải'
                    : '3. Developer — Investigated the synthesis, properties, and dye adsorption applications of HAP/PANI composite materials for wastewater treatment'}
                </span>
                <span className="text-xs font-mono text-teal-800 font-bold">
                  {isVi ? '07/2026 - 08/2026' : 'July 2026 - Aug 2026'}
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1 font-medium">
                {isVi
                  ? 'Phòng Thí nghiệm Nghiên cứu, Trường Đại học Sư phạm Hà Nội (HNUE).'
                  : 'Research Laboratory, Hanoi National University of Education (HNUE).'}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Tổng hợp vật liệu composite hydroxyapatite/polyaniline (HAP/PANI), phân tích FTIR/SEM và đánh giá dung lượng hấp phụ cực đại theo mô hình đẳng nhiệt Langmuir/Freundlich.'
                  : 'Synthesized HAP/PANI composite materials, characterized structural properties, and evaluated maximum adsorption capacity using Langmuir and Freundlich isotherm models.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Research & Publications */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Microscope className="w-4 h-4 text-teal-700" />
              {isVi ? 'III. Nghiên Cứu Khoa Học & Bài Báo Công Bố' : 'III. Research Publications & Scientific Inquiries'}
            </h3>
            <button onClick={() => onSelectSection('research')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 bg-teal-50/50 rounded-xl border border-teal-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-teal-950">
                  {isVi
                    ? '1. Đồng tác giả bài báo khoa học — Đã công bố trên Tạp chí Khoa học & Phát triển Bền vững (SASD)'
                    : '1. Research Co-Author — Published in Journal of Science and Sustainable Development (SASD)'}
                </span>
                <span className="px-2 py-0.5 bg-teal-700 text-white font-mono text-[10px] font-bold rounded">
                  {isVi ? 'Đã Công Bố' : 'Published'}
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1 font-medium">
                {isVi
                  ? 'Đề tài: Nghiên cứu sự tích tụ kim loại vết trên vi nhựa qua trung gian màng sinh học (biofilms) trong mẫu trầm tích và đánh giá rủi ro môi trường.'
                  : 'Topic: Investigated trace metal accumulation on microplastics mediated by biofilms in sediment samples and assessed associated environmental risks.'}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Cố vấn hướng dẫn: ThS. Mai Văn Phong, Trường Đại học Bách khoa Hà Nội (HUST).'
                  : 'Mentor: Mai Van Phong, Hanoi University of Science and Technology (HUST).'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi
                    ? '2. Đồng tác giả — Nghiên cứu Vật liệu Chức năng Tiên tiến cho Xúc tác Môi trường và Xử lý Nguồn nước'
                    : '2. Research Co-Author — Advanced Functional Materials for Environmental Catalysis and Water Remediation'}
                </span>
                <span className="px-2 py-0.5 bg-slate-200 text-slate-700 font-mono text-[10px] font-bold rounded">
                  {isVi ? 'Đang Hoàn Thiện (2026)' : 'In Progress (2026)'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isVi
                  ? 'Nghiên cứu cơ chế xúc tác nâng cao (AOPs), phân hủy gốc tự do và độ bền chu kỳ của vật liệu nano tổ hợp mới.'
                  : 'Investigating advanced oxidation processes (AOPs), reactive radical generation, and cyclic reusability of novel composite nanomaterials.'}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Extracurricular Activities */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-700" />
              {isVi ? 'IV. Hoạt Động Ngoại Khóa & Năng Lực Lãnh Đạo (ECA)' : 'IV. Extracurricular Activities & Leadership (ECA)'}
            </h3>
            <button onClick={() => onSelectSection('activities')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '1. CodeFuture Việt Nam | Đồng sáng lập' : '1. CodeFuture Vietnam | Co-Founder'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Phổ cập lập trình Scratch và tư duy logic cho học sinh tiểu học.'
                  : 'Taught Scratch coding and logic thinking fundamentals to elementary school students.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '2. Dự án Dưỡng Tâm | Trưởng ban Vận hành & MC' : '2. Duong Tam Project | Head of Operations & MC'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Điều phối và dẫn dắt workshop chăm sóc tinh thần cho người cao tuổi tại các viện dưỡng lão.'
                  : 'Led operations and hosted emotional well-being workshops for elderly residents in care centers.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '3. TikTok Làng Nghề | Đồng sáng lập & Sáng tạo' : '3. Craft Village TikTok | Co-Founder & Creator'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Sản xuất video ngắn giải mã hóa học di sản làng nghề truyền thống.'
                  : 'Produced short-form educational videos exploring the chemistry of traditional craft villages.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '4. High School Help Kit | Diễn giả Khách mời' : '4. High School Help Kit | Keynote Speaker'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Chia sẻ phương pháp học Chuyên Hóa và NCKH tại Unboxing Day 2024.'
                  : 'Keynote speaker at Unboxing Day 2024 sharing chemistry study methods and research experiences.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '5. CLB Thiên văn học Amstronomy | Thành viên Ban Nhân sự' : '5. Amstronomy Club | HR Member'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Điều phối nhân sự và tổ chức các đêm cắm trại quan sát thiên văn tại THPT Chuyên Hà Nội - Amsterdam.'
                  : 'Coordinated human resources and stargazing observation camps at Hanoi - Amsterdam High School.'}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Volunteer & Community Service */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-teal-700" />
              {isVi ? 'V. Hoạt Động Tình Nguyện & Phụng Sự Cộng Đồng' : 'V. Volunteer & Community Service'}
            </h3>
            <button onClick={() => onSelectSection('volunteer')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '1. Sáng kiến C.A.R.E | Thành viên' : '1. C.A.R.E Initiative | Member'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Tháng 11/2024 — Sáng kiến của Hội Sinh viên VN tại VN & Singapore hỗ trợ người có hoàn cảnh khó khăn.'
                  : 'Nov 2024 — Community relief effort by Vietnamese Student Associations in VN & Singapore.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '2. Bệnh viện Nhi Trung ương | Tình nguyện viên & Nhà tài trợ' : '2. National Children’s Hospital | Volunteer & Donor'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Gây quỹ và tài trợ chi phí phẫu thuật cho bệnh nhi khiếm thính bẩm sinh.'
                  : 'Fundraised and directly sponsored medical aid for a child with congenital hearing impairment.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '3. Đông Ấm 2025 | Tình nguyện viên' : '3. Warm Winter 2025 | Volunteer'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Trao áo ấm, thuốc men và hỗ trợ y tế tại Xã Lao Chải, Tỉnh Tuyên Quang (Đoàn ĐH Y Dược ĐHQGHN).'
                  : 'Delivered warm clothing and supported medical checkups in Lao Chai Commune, Tuyen Quang.'}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-900 block">
                {isVi ? '4. Làng Trẻ SOS Hải Phòng | Tình nguyện viên' : '4. SOS Children’s Village Hai Phong | Volunteer'}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                {isVi
                  ? 'Tháng 05/2026 — Tổ chức sinh hoạt khoa học vui và kỹ năng sống cho các em nhỏ.'
                  : 'May 2026 — Mentored children through interactive hands-on STEM experiments.'}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Work Experience */}
        <div>
          <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md mb-4 border-l-4 border-teal-700">
            <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-teal-700" />
              {isVi ? 'VI. Kinh Nghiệm Làm Việc & Thực Tập Kỹ Thuật' : 'VI. Work Experience & Industrial Internships'}
            </h3>
            <button onClick={() => onSelectSection('experience')} className="text-xs text-teal-700 hover:underline font-semibold no-print">
              {isVi ? 'Xem chi tiết mục này →' : 'View Section →'}
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi
                    ? '1. Thực tập sinh Kỹ thuật — Công ty Cổ phần Supe Phốt phát và Hóa chất Lâm Thao'
                    : '1. Technical Intern — Lam Thao Fertilizers and Chemicals Joint Stock Company'}
                </span>
                <span className="text-xs font-mono text-teal-800 font-bold">2025 - 2026</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isVi
                  ? 'Khảo sát hệ thống xử lý khí thải/nước thải công nghiệp, quy trình an toàn hóa chất nhà máy axit H2SO4 và phân tích kiểm soát chất lượng (QC).'
                  : 'Studied industrial emissions scrubbers, chemical safety protocols in large-scale H2SO4 production lines, and quality control (QC) analytical methods.'}
              </p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900">
                  {isVi
                    ? '2. Trợ lý Phòng Thí nghiệm — Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST)'
                    : '2. Lab Assistant — Chemistry Department, Hanoi University of Science and Technology (HUST)'}
                </span>
                <span className="text-xs font-mono text-teal-800 font-bold">2025 - 2026</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {isVi
                  ? 'Tiến hành thực nghiệm phân hủy quang xúc tác Methylene Blue với nanocomposite ZnO/g-C3N4, phân tích quang phổ UV-Vis và tính toán động học phản ứng.'
                  : 'Conducted photocatalytic degradation assays on Methylene Blue using ZnO/g-C3N4 nanocomposites, processing UV-Vis absorbance curves and kinetic rates.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
