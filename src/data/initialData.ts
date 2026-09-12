import { PortfolioPost, StudentProfile, Molecule3DData } from '../types';

export const initialStudentProfile: StudentProfile = {
  name: 'Ton Duc Minh',
  fullNameVi: 'Tôn Đức Minh',
  title: 'Chemistry Researcher & High School Innovator',
  school: 'Hanoi - Amsterdam High School for the Gifted',
  schoolVi: 'Trường THPT Chuyên Hà Nội - Amsterdam',
  class: '12 Chemistry 1',
  email: 'tonducminh.chem@gmail.com',
  phone: '+84 (0) 912 345 678',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  location: 'Hanoi, Vietnam',
  locationVi: 'Hà Nội, Việt Nam',
  bioEn: 'Senior student at Hanoi - Amsterdam High School for the Gifted specializing in Chemistry. Passionate about green synthesis, photocatalysis, environmental nanotechnology, and cultural heritage chemistry.',
  bioVi: 'Học sinh lớp 12 Chuyên Hóa 1, Trường THPT Chuyên Hà Nội - Amsterdam. Đam mê tổng hợp hóa học xanh, quang xúc tác, công nghệ nano xử lý môi trường và hóa học di sản văn hóa truyền thống.',
  personalStatement: 'Đam mê ứng dụng tổng hợp hóa học, vật liệu nano tiên tiến và xúc tác quang để giải quyết các thách thức ô nhiễm môi trường và bảo tồn di sản văn hóa truyền thống. Định hướng theo đuổi ngành Kỹ thuật Hóa học và Khoa học Vật liệu hướng tới công nghệ xanh bền vững.',
  personalStatementEn: 'Passionate about applying chemical synthesis, advanced nanomaterials, and photocatalysis to solve environmental contamination and safeguard traditional cultural heritage. Aspiring chemical engineer and materials science researcher dedicated to sustainable green technology.',
  personalStatementVi: 'Đam mê ứng dụng tổng hợp hóa học, vật liệu nano tiên tiến và xúc tác quang để giải quyết các thách thức ô nhiễm môi trường và bảo tồn di sản văn hóa truyền thống. Định hướng theo đuổi ngành Kỹ thuật Hóa học và Khoa học Vật liệu hướng tới công nghệ xanh bền vững.',
  researchFocus: [
    'Photocatalysis & Nanocomposites (ZnO/g-C₃N₄)',
    'Environmental Remediation & Dye Degradation',
    'Cultural Heritage Chemistry & Macro Photography',
    'Adsorption Kinetics & Composite Materials (HAP/PANI)'
  ],
  researchFocusVi: [
    'Quang xúc tác & Vật liệu Nanocomposite (ZnO/g-C₃N₄)',
    'Xử lý ô nhiễm Môi trường & Phân hủy Chất màu',
    'Hóa học Di sản Văn hóa & Nhiếp ảnh Khoa học',
    'Động học Hấp phụ & Vật liệu Tổ hợp (HAP/PANI)'
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'tonducminh.chem@gmail.com',
    researchgate: 'https://researchgate.net'
  }
};

export const initialPortfolioPosts: PortfolioPost[] = [
  // ==========================================
  // --- 1. ABOUT & INTERESTS ---
  // ==========================================
  {
    id: 'about-photography-chemistry',
    section: 'about',
    titleEn: 'Scientific & Cultural Macro Photography',
    titleVi: 'Nhiếp ảnh Khoa học & Văn hóa Di sản',
    subtitleEn: 'Capturing microscopic chemical reactions, crystal growth, and traditional Vietnamese craftsmanship',
    subtitleVi: 'Ghi lại các phản ứng tinh thể hóa học vi mô và vẻ đẹp các làng nghề truyền thống Việt Nam',
    roleOrOrganizationEn: 'Photographer & Visual Researcher',
    roleOrOrganizationVi: 'Nhiếp ảnh gia & Nhà nghiên cứu thị giác',
    dateRangeEn: '2023 - Present',
    dateRangeVi: '2023 - Hiện tại',
    locationEn: 'Vietnam',
    locationVi: 'Việt Nam',
    summaryEn: 'Exploring the intersection of science and visual storytelling through macro photography of crystal precipitation, surface textures, and heritage craft traditions.',
    summaryVi: 'Khám phá điểm giao thoa giữa khoa học và nghệ thuật thị giác thông qua nhiếp ảnh cận cảnh (macro) về kết tinh hóa học, bề mặt vật liệu và các làng nghề truyền thống.',
    contentEn: `## 1. Bridging Visual Storytelling and Chemical Dynamics
Photography is far more than a creative pastime; for me, it serves as an indispensable visual methodology to capture chemistry in real time. Through macro lenses and polarized illumination, unseen microscopic transitions—such as crystal nucleation, organic dye diffusion, and electrochemical deposition—are recorded with empirical precision.

![Microscopic crystal growth captured under polarized cross-lighting | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## 2. Archiving Traditional Craftsmanship & High School Journey
Beyond the laboratory bench, my camera documents field journeys across traditional Vietnamese craft villages, capturing indigo dyeing vats, wood-ash ceramic kilns, and bronze casting workshops.

> "Chemistry explains the fundamental molecular mechanisms, while photography immortalizes the human spirit and heritage behind every craft."

> 💡 **1-Min Takeaway:** Integrating empirical chemical analysis with macro photography transforms abstract scientific phenomena into intuitive, inspiring visual narratives.`,
    contentVi: `## 1. Giao thoa giữa lăng kính thị giác và phản ứng hóa học
Nhiếp ảnh đối với tôi không đơn thuần là một sở thích nghệ thuật, mà là phương tiện khoa học trực quan để ghi lại vẻ đẹp tiềm ẩn của hóa học trong tự nhiên và đời sống. Qua ống kính macro và ánh sáng phân cực, những hiện tượng biến đổi vật chất vi mô — từ sự hình thành mầm tinh thể muối vô cơ đến sự phân tán sắc tố trong dung môi hữu cơ — được ghi lại với độ chính xác và tính thẩm mỹ cao.

![Mạng tinh thể muối kết tinh dưới ánh sáng phân cực góc rộng | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## 2. Lưu giữ di sản làng nghề và nhịp sống Chuyên Hóa Ams
Bên cạnh các thí nghiệm phòng lab, ống kính máy ảnh đồng hành cùng tôi trong các chuyến khảo sát điền dã khắp các làng nghề truyền thống Việt Nam — từ xưởng nhuộm chàm, lò gốm nung men tro đến làng nghề đúc đồng cổ truyền.

> "Khoa học giúp ta hiểu được bản chất phản ứng, còn nhiếp ảnh giúp ta lưu giữ linh hồn và câu chuyện của con người đằng sau từng hiện vật."

> 💡 **Điểm nhấn 1 phút:** Sự kết hợp độc đáo giữa tư duy thực nghiệm hóa học và ngôn ngữ thị giác giúp tư liệu hóa di sản văn hóa một cách chân thực, đồng thời truyền cảm hứng yêu khoa học tới cộng đồng.`,
    title: 'Scientific & Cultural Macro Photography',
    subtitle: 'Capturing microscopic chemical reactions and traditional Vietnamese craftsmanship',
    roleOrOrganization: 'Photographer & Visual Researcher',
    dateRange: '2023 - Present',
    location: 'Vietnam',
    summary: 'Exploring the intersection of science and visual storytelling through macro photography of crystal precipitation and heritage craft traditions.',
    content: `**Creative Philosophy:** Photography serves as an indispensable visual methodology to document chemistry in real life.`,
    images: [
      {
        id: 'img-photo-1',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Macro photography of chemical crystal nucleation under polarized illumination.',
        isMain: true
      },
      {
        id: 'img-photo-2',
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        caption: 'Documenting traditional Vietnamese natural indigo fermentation and fabric dyeing.'
      }
    ],
    tagsEn: ['ScientificPhotography', 'Macro', 'CulturalHeritage', 'VisualStorytelling'],
    tagsVi: ['NhiepAnhKhoaHoc', 'Macro', 'DiSanVanHoa', 'LangNgheTruyenThong'],
    tags: ['ScientificPhotography', 'Macro', 'CulturalHeritage', 'VisualStorytelling'],
    impactMetricsEn: [
      { label: 'Domain', value: 'Scientific & Heritage Photography' },
      { label: 'Focus', value: 'Macro & Crystal Visualization' }
    ],
    impactMetricsVi: [
      { label: 'Lĩnh vực', value: 'Nhiếp ảnh Khoa học & Di sản' },
      { label: 'Chủ đề', value: 'Ảnh Macro & Trực quan Hóa học' }
    ],
    impactMetrics: [
      { label: 'Domain', value: 'Scientific & Heritage Photography' },
      { label: 'Focus', value: 'Macro & Crystal Visualization' }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2024-09-01'
  },

  // ==========================================
  // --- 2. HONORS & AWARDS (8 Giải thưởng theo đúng thứ tự) ---
  // ==========================================
  {
    id: 'honor-jdie-2025',
    section: 'honors',
    titleEn: 'Double Award (Gold Medal & Grand International Invention Award) — Japan Design, Idea and Invention Expo (JDIE 2025)',
    titleVi: 'Giải thưởng kép (Huy chương Vàng & Giải Phát minh Quốc tế Xuất sắc nhất) — Japan Design, Idea and Invention Expo (JDIE 2025)',
    subtitleEn: 'Awarded by Japan Intellectual Property Association (JIPA) & WIIPA in Tokyo, Japan (366 teams / 25 countries)',
    subtitleVi: 'Trao bởi Hiệp hội Sở hữu Trí tuệ Nhật Bản & WIIPA tại Tokyo, Nhật Bản (366 đội / 25 quốc gia)',
    roleOrOrganizationEn: 'Primary Inventor & Team Leader / JDIE 2025',
    roleOrOrganizationVi: 'Nhà sáng chế chính & Trưởng nhóm / JDIE 2025',
    dateRangeEn: '2025',
    dateRangeVi: '2025',
    locationEn: 'Tokyo, Japan',
    locationVi: 'Tokyo, Nhật Bản',
    summaryEn: 'Achieved top honors at JDIE 2025 in Tokyo, winning both the Gold Medal and the Grand International Invention Award among 366 competing global research teams from 25 countries.',
    summaryVi: 'Xuất sắc giành giải thưởng kép cao quý nhất tại JDIE 2025 ở Tokyo: Huy chương Vàng và Giải Phát minh Quốc tế Xuất sắc nhất, vượt qua 366 đội thi đến từ 25 quốc gia trên thế giới.',
    contentEn: `**Competition & Host Organization:**
Japan Design, Idea and Invention Expo (JDIE 2025), organized by the Japan Intellectual Property Association (JIPA) and World Invention Intellectual Property Associations (WIIPA) in Tokyo, Japan.

**Accomplishment:**
- **Double Award:** Won the prestigious **Gold Medal** along with the **Grand International Invention Award** (the highest honor of the exposition).
- Competing against **366 research teams from 25 countries and territories**.

**Project Scope:**
Presented a breakthrough practical chemical invention focusing on green synthesis and sustainable environmental treatment, earning unanimous acclaim from the international jury of patent examiners and academic professors.`,
    contentVi: `**Đơn vị tổ chức & Quy mô:**
Triển lãm Thiết kế, Ý tưởng và Sáng chế Quốc tế Nhật Bản (JDIE 2025) do Hiệp hội Sở hữu Trí tuệ Nhật Bản (JIPA) và Hiệp hội Sáng chế Quốc tế (WIIPA) tổ chức tại Tokyo, Nhật Bản.

**Thành tích đạt được:**
- **Giải thưởng kép:** Đoạt **Huy chương Vàng (Gold Medal)** và **Giải thưởng Phát minh Quốc tế Xuất sắc nhất (Grand International Invention Award)**.
- Tranh tài cùng **366 đội thi nghiên cứu xuất sắc đến từ 25 quốc gia và vùng lãnh thổ**.

**Ý nghĩa đề tài:**
Đề tài sáng chế tập trung vào công nghệ tổng hợp hóa học xanh và giải pháp xử lý môi trường bền vững, được hội đồng giám khảo quốc tế đánh giá cao về tính khả thi thương mại và tính sáng tạo kỹ thuật.`,
    title: 'Double Award (Gold Medal & Grand Invention Award) — JDIE 2025 Japan',
    subtitle: 'Japan Design, Idea and Invention Expo 2025 (Tokyo, Japan)',
    roleOrOrganization: 'Primary Inventor & Team Leader',
    dateRange: '2025',
    location: 'Tokyo, Japan',
    summary: 'Won both the Gold Medal and Grand International Invention Award at JDIE 2025 among 366 teams from 25 countries.',
    content: `**Double Award:** Won Gold Medal & Grand International Invention Award at JDIE 2025 in Tokyo, Japan.`,
    images: [
      {
        id: 'img-jdie-1',
        url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=80',
        caption: 'Gold Medal and Grand Invention Award trophy presented at JDIE Tokyo, Japan.',
        isMain: true
      }
    ],
    tagsEn: ['JDIE2025', 'GoldMedal', 'GrandInventionAward', 'TokyoJapan', 'WIIPA'],
    tagsVi: ['JDIE2025', 'HuyChuongVang', 'PhatMinhXuatSac', 'TokyoNhatBan', 'SangCheQuocTe'],
    tags: ['JDIE2025', 'GoldMedal', 'GrandInventionAward', 'TokyoJapan', 'WIIPA'],
    impactMetricsEn: [
      { label: "Award", value: "Double Award (Gold & Grand Award)" },
      { label: "Host Body", value: "JIPA & WIIPA (Tokyo, Japan)" },
      { label: "Participating Teams", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Giải Vàng & Phát minh Xuất sắc" },
      { label: "Đơn vị trao giải", value: "JIPA & WIIPA (Nhật Bản)" },
      { label: "Quy mô đội thi", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Double Award" },
      { label: "Host Body", value: "JIPA & WIIPA" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2025-07-15'
  },
  {
    id: 'honor-icpc-2026',
    section: 'honors',
    titleEn: 'Gold Medal — International Creative Papers Conference & Olympic (ICPC 2026 Korea)',
    titleVi: 'Huy chương Vàng — International Creative Papers Conference & Olympic (ICPC 2026 Korea)',
    subtitleEn: 'Recognized for excellence in advanced chemical research paper presentation in Seoul, South Korea',
    subtitleVi: 'Được vinh danh xuất sắc tại hội nghị và Olympic báo cáo bài báo khoa học sáng tạo quốc tế tại Seoul, Hàn Quốc',
    roleOrOrganizationEn: 'First Author & Presenter / ICPC 2026',
    roleOrOrganizationVi: 'Tác giả thứ nhất & Báo cáo viên / ICPC 2026',
    dateRangeEn: '2026',
    dateRangeVi: '2026',
    locationEn: 'Seoul, South Korea',
    locationVi: 'Seoul, Hàn Quốc',
    summaryEn: 'Awarded the Gold Medal for outstanding scientific research paper submission and oral defense on functional environmental nanomaterials.',
    summaryVi: 'Đoạt Huy chương Vàng với công trình nghiên cứu khoa học xuất sắc về vật liệu nano chức năng và giải pháp xử lý môi trường tại Seoul, Hàn Quốc.',
    contentEn: `**Conference:** International Creative Papers Conference & Olympic (ICPC 2026), held in Seoul, South Korea.

**Achievement:** Awarded **Gold Medal (Huy chương Vàng)**.
- Submitted an exhaustive academic manuscript on nanostructured composite materials for environmental contaminant degradation.
- Defended experimental methodologies, kinetic modeling, and characterization data before an international scientific review committee.`,
    contentVi: `**Hội nghị:** Hội nghị & Olympic Bài báo Khoa học Sáng tạo Quốc tế (ICPC 2026) tổ chức tại Seoul, Hàn Quốc.

**Thành tích:** Đạt **Huy chương Vàng (Gold Medal)**.
- Trình bày công trình nghiên cứu khoa học chuyên sâu về vật liệu nanocomposite và cơ chế phân hủy quang xúc tác các chất ô nhiễm môi trường.
- Báo cáo và bảo vệ thuyết phục các dữ liệu thực nghiệm và mô hình động học phản ứng trước hội đồng khoa học quốc tế.`,
    title: 'Gold Medal — ICPC 2026 Korea',
    subtitle: 'International Creative Papers Conference & Olympic (Seoul, Korea)',
    roleOrOrganization: 'First Author & Presenter',
    dateRange: '2026',
    location: 'Seoul, South Korea',
    summary: 'Awarded Gold Medal for scientific research paper and presentation on functional nanomaterials.',
    content: `**Gold Medal:** Awarded at International Creative Papers Conference (ICPC 2026 Korea).`,
    images: [
      {
        id: 'img-icpc-1',
        url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Gold Medal Certificate and research presentation defense at ICPC 2026 Seoul.',
        isMain: true
      }
    ],
    tagsEn: ['ICPC2026', 'GoldMedal', 'ResearchPaper', 'SeoulKorea', 'Nanomaterials'],
    tagsVi: ['ICPC2026', 'HuyChuongVang', 'BaiBaoKhoaHoc', 'SeoulHanQuoc', 'VatLieuNano'],
    tags: ['ICPC2026', 'GoldMedal', 'ResearchPaper', 'SeoulKorea', 'Nanomaterials'],
    impactMetricsEn: [
      { label: "Award", value: "Gold Medal" },
      { label: "Host Body", value: "ICPC Committee (Seoul)" },
      { label: "Countries / Teams", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Huy chương Vàng" },
      { label: "Đơn vị trao giải", value: "Hội đồng ICPC (Seoul)" },
      { label: "Quy mô tham gia", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Gold Medal" },
      { label: "Host Body", value: "ICPC Committee" }
    ],
    isHighlighted: true,
    order: 2,
    createdDate: '2026-01-20'
  },
  {
    id: 'honor-ican-2026',
    section: 'honors',
    titleEn: 'Gold Medal & Special Award for Sustainable Innovation — International Invention Innovation Competition in Canada (ICAN 2026)',
    titleVi: 'Huy chương Vàng & Giải thưởng Đặc biệt về Đổi mới Bền vững — International Invention Innovation Competition in Canada (ICAN 2026)',
    subtitleEn: 'Awarded by Toronto International Society of Innovation & Advanced Skills (TISIAS) in Toronto, Canada',
    subtitleVi: 'Trao tặng bởi Hiệp hội Đổi mới & Kỹ năng Tiên tiến Quốc tế Toronto (TISIAS) tại Toronto, Canada',
    roleOrOrganizationEn: 'Lead Researcher & Inventor / ICAN 2026',
    roleOrOrganizationVi: 'Nghiên cứu sinh trưởng nhóm & Tác giả sáng chế / ICAN 2026',
    dateRangeEn: '2026',
    dateRangeVi: '2026',
    locationEn: 'Toronto, Canada',
    locationVi: 'Toronto, Canada',
    summaryEn: 'Clinched both the Gold Medal and the Special Award for Sustainable Innovation from TISIAS Canada for pioneering green chemical research.',
    summaryVi: 'Đoạt Huy chương Vàng và Giải thưởng Đặc biệt về Sáng kiến Bền vững từ TISIAS Canada cho nghiên cứu hóa học xanh đột phá.',
    contentEn: `**Organizing Body:**
Toronto International Society of Innovation & Advanced Skills (TISIAS), Canada.

**Honors Received:**
- **Gold Medal (Huy chương Vàng)** in the Environmental & Green Chemistry division.
- **Special Award for Sustainable Innovation** granted by the international evaluation board for tangible contributions to clean technology and wastewater remediation.`,
    contentVi: `**Đơn vị tổ chức:**
Hiệp hội Đổi mới & Kỹ năng Tiên tiến Quốc tế Toronto (TISIAS), Canada.

**Các giải thưởng đạt được:**
- **Huy chương Vàng (Gold Medal)** thuộc bảng Hóa học Môi trường & Công nghệ Xanh.
- **Giải thưởng Đặc biệt về Đổi mới Bền vững (Special Award for Sustainable Innovation)** từ hội đồng quốc tế vinh danh giải pháp xử lý nước thải thân thiện với hệ sinh thái.`,
    title: 'Gold Medal & Special Award — ICAN 2026 Canada',
    subtitle: 'International Invention Innovation Competition in Canada (Toronto, Canada)',
    roleOrOrganization: 'Lead Researcher & Inventor',
    dateRange: '2026',
    location: 'Toronto, Canada',
    summary: 'Won Gold Medal & Special Award for Sustainable Innovation from TISIAS Canada.',
    content: `**Gold Medal & Special Award:** Conferred by TISIAS in Toronto, Canada.`,
    images: [
      {
        id: 'img-ican-1',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'ICAN 2026 Gold Medal and Special Award certificate issued by TISIAS Toronto.',
        isMain: true
      }
    ],
    tagsEn: ['ICAN2026', 'GoldMedal', 'SpecialAward', 'TISIAS', 'TorontoCanada'],
    tagsVi: ['ICAN2026', 'HuyChuongVang', 'GiaiDacBiet', 'TISIAS', 'TorontoCanada'],
    tags: ['ICAN2026', 'GoldMedal', 'SpecialAward', 'TISIAS', 'TorontoCanada'],
    impactMetricsEn: [
      { label: "Award", value: "Gold Medal & Special Award" },
      { label: "Host Body", value: "TISIAS (Toronto, Canada)" },
      { label: "International Entries", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Huy chương Vàng & Giải Đặc biệt" },
      { label: "Đơn vị trao giải", value: "TISIAS (Toronto, Canada)" },
      { label: "Số dự án quốc tế", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Gold Medal & Special Award" },
      { label: "Host Body", value: "TISIAS (Canada)" }
    ],
    isHighlighted: true,
    order: 3,
    createdDate: '2026-02-10'
  },
  {
    id: 'honor-aijam-2026',
    section: 'honors',
    titleEn: 'Gold Award — Advanced Invention & Innovation Contest (AIJAM 2026)',
    titleVi: 'Huy chương Vàng Sáng tạo Công nghệ — Advanced Invention & Innovation Contest (AIJAM 2026)',
    subtitleEn: 'Silicon Valley, California, USA — Honored for high-impact practical chemical innovation',
    subtitleVi: 'Thung lũng Silicon, California, Hoa Kỳ — Vinh danh giải pháp sáng chế hóa học ứng dụng cao',
    roleOrOrganizationEn: 'Co-Inventor / AIJAM 2026',
    roleOrOrganizationVi: 'Đồng tác giả sáng chế / AIJAM 2026',
    dateRangeEn: '2026',
    dateRangeVi: '2026',
    locationEn: 'Silicon Valley, California, USA',
    locationVi: 'Silicon Valley, California, Hoa Kỳ',
    summaryEn: 'Honored with the Gold Award at the prestigious AIJAM Silicon Valley contest for developing viable, scalable chemical solutions.',
    summaryVi: 'Xuất sắc giành Huy chương Vàng tại cuộc thi sáng chế danh giá AIJAM Thung lũng Silicon với giải pháp công nghệ hóa học có tính ứng dụng thực tiễn cao.',
    contentEn: `**Contest:** Advanced Invention & Innovation Contest (AIJAM 2026), held in Silicon Valley, California, USA.

**Distinction:** **Gold Award (Huy chương Vàng)**.
- Recognized by American patent attorneys, tech venture capitalists, and academic researchers for applied chemical ingenuity.
- Praised for the scalable synthesis route and cost-effective environmental remediation characteristics of the materials.`,
    contentVi: `**Cuộc thi:** Cuộc thi Sáng chế và Đổi mới Tiên tiến (AIJAM 2026) tổ chức tại Thung lũng Silicon, California, Hoa Kỳ.

**Thành tích:** **Huy chương Vàng (Gold Award)**.
- Được các luật sư sáng chế, chuyên gia công nghệ và hội đồng khoa học Hoa Kỳ đánh giá cao về tiềm năng thương mại hóa và tính ứng dụng thực tế.
- Giải pháp tổng hợp vật liệu xử lý môi trường chi phí thấp và hiệu suất cao.`,
    title: 'Gold Award — AIJAM 2026 Silicon Valley',
    subtitle: 'Advanced Invention & Innovation Contest (Silicon Valley, California, USA)',
    roleOrOrganization: 'Co-Inventor',
    dateRange: '2026',
    location: 'Silicon Valley, California, USA',
    summary: 'Awarded Gold Award at AIJAM Silicon Valley for scalable chemical innovation.',
    content: `**Gold Award:** Conferred at AIJAM Silicon Valley, California, USA.`,
    images: [
      {
        id: 'img-aijam-1',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        caption: 'AIJAM 2026 Silicon Valley Gold Award recognition.',
        isMain: true
      }
    ],
    tagsEn: ['AIJAM2026', 'GoldAward', 'SiliconValley', 'CaliforniaUSA', 'InventionContest'],
    tagsVi: ['AIJAM2026', 'HuyChuongVang', 'SiliconValley', 'CaliforniaHoaKy', 'SangChe'],
    tags: ['AIJAM2026', 'GoldAward', 'SiliconValley', 'CaliforniaUSA', 'InventionContest'],
    impactMetricsEn: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "Silicon Valley Contest (USA)" },
      { label: "Global Entries", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Huy chương Vàng" },
      { label: "Đơn vị trao giải", value: "SV Contest (Mỹ)" },
      { label: "Số dự án dự thi", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "Silicon Valley Contest" }
    ],
    isHighlighted: true,
    order: 4,
    createdDate: '2026-03-01'
  },
  {
    id: 'honor-icq-2025',
    section: 'honors',
    titleEn: 'First Prize / High Distinction Excellence — International Chemistry Quiz (ICQ 2025)',
    titleVi: 'Giải Nhất (High Distinction Excellence) — International Chemistry Quiz (ICQ 2025)',
    subtitleEn: 'Organized by the Royal Australian Chemical Institute (RACI)',
    subtitleVi: 'Tổ chức bởi Viện Hóa học Hoàng gia Úc (RACI)',
    roleOrOrganizationEn: 'Individual Competitor / RACI ICQ',
    roleOrOrganizationVi: 'Thí sinh dự thi cá nhân / RACI ICQ',
    dateRangeEn: '2025',
    dateRangeVi: '2025',
    locationEn: 'Australia / Global',
    locationVi: 'Úc / Toàn cầu',
    summaryEn: 'Scored in the top percentile globally in the prestigious RACI International Chemistry Quiz, earning First Prize / High Distinction Excellence.',
    summaryVi: 'Đạt điểm số top đầu thế giới trong kỳ thi Olympic Hóa học Quốc tế RACI ICQ do Viện Hóa học Hoàng gia Úc tổ chức, nhận danh hiệu High Distinction Excellence.',
    contentEn: `**Organization:** Royal Australian Chemical Institute (RACI), Australia.

**Distinction:** **First Prize / High Distinction Excellence**.
- Demonstrates deep theoretical foundation across inorganic, physical, organic, and analytical chemistry.
- Placed in the top percentiles among tens of thousands of international participants across the globe.`,
    contentVi: `**Đơn vị tổ chức:** Viện Hóa học Hoàng gia Úc (RACI), Úc.

**Thành tích:** **Giải Nhất / High Distinction Excellence**.
- Khẳng định tư duy phân tích và kiến thức nền tảng vững chắc trong các phân ngành Hóa vô cơ, Hóa hữu cơ, Hóa lý và Hóa phân tích.
- Thuộc nhóm thí sinh có điểm số cao nhất trong hàng vạn học sinh tham gia trên toàn cầu.`,
    title: 'First Prize / High Distinction — RACI ICQ 2025',
    subtitle: 'Royal Australian Chemical Institute International Chemistry Quiz',
    roleOrOrganization: 'Individual Competitor',
    dateRange: '2025',
    location: 'Australia / Global',
    summary: 'Scored top percentile in RACI ICQ 2025 earning High Distinction Excellence.',
    content: `**High Distinction Excellence:** Conferred by Royal Australian Chemical Institute.`,
    images: [
      {
        id: 'img-icq-1',
        url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'RACI International Chemistry Quiz Certificate of High Distinction.',
        isMain: true
      }
    ],
    tagsEn: ['RACI_ICQ', 'HighDistinction', 'ChemistryOlympiad', 'Australia', 'RACI'],
    tagsVi: ['RACI_ICQ', 'HighDistinction', 'OlympicHoaHoc', 'Uc', 'RACI'],
    tags: ['RACI_ICQ', 'HighDistinction', 'ChemistryOlympiad', 'Australia', 'RACI'],
    impactMetricsEn: [
      { label: "Award", value: "High Distinction Excellence" },
      { label: "Host Body", value: "RACI (Australia)" },
      { label: "Percentile / Score", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Giải Xuất sắc (High Distinction)" },
      { label: "Đơn vị tổ chức", value: "RACI (Úc)" },
      { label: "Điểm số / Phân vị", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "High Distinction" },
      { label: "Host Body", value: "RACI" }
    ],
    order: 5,
    createdDate: '2025-08-20'
  },
  {
    id: 'honor-c3l6-2025',
    section: 'honors',
    titleEn: 'Gold Award — Cambridge Chemistry Challenge (C3L6 2025)',
    titleVi: 'Giải Vàng (Gold Award) — Cambridge Chemistry Challenge (C3L6 2025)',
    subtitleEn: "Administered by the University of Cambridge & St Catharine's College, UK",
    subtitleVi: "Tổ chức bởi Đại học Cambridge và Cao đẳng St Catharine's, Vương quốc Anh",
    roleOrOrganizationEn: 'Individual Competitor / C3L6',
    roleOrOrganizationVi: 'Thí sinh dự thi cá nhân / C3L6',
    dateRangeEn: '2025',
    dateRangeVi: '2025',
    locationEn: 'Cambridge, United Kingdom',
    locationVi: 'Cambridge, Vương quốc Anh',
    summaryEn: 'Awarded the Gold Award in the renowned Cambridge Chemistry Challenge (C3L6), testing rigorous university-level organic, physical, and inorganic chemistry problem-solving.',
    summaryVi: 'Xuất sắc đạt Giải Vàng tại kỳ thi Thử thách Hóa học Cambridge (C3L6), vượt qua các bài toán tư duy hóa học chuyên sâu cấp độ đại học.',
    contentEn: `**Academic Competition:** Cambridge Chemistry Challenge for Lower Sixth (C3L6), University of Cambridge & St Catharine's College, UK.

**Distinction:** **Gold Award (Giải Vàng)**.
- Designed by Cambridge chemistry dons to stretch students beyond standard high school curricula into first-year university chemical concepts.
- Rigorous problems testing stereochemistry, thermodynamics, and organic reaction mechanisms.`,
    contentVi: `**Kỳ thi:** Thử thách Hóa học Cambridge (C3L6) do Đại học Cambridge và Cao đẳng St Catharine's tổ chức.

**Thành tích:** **Giải Vàng (Gold Award)**.
- Bài thi được thiết kế bởi các giáo sư Đại học Cambridge nhằm thử thách năng lực tư duy hóa học vượt trên chương trình phổ thông tiêu chuẩn.
- Đòi hỏi sự hiểu biết sâu sắc về hóa học lập thể, nhiệt động lực học và cơ chế phản ứng hữu cơ phức tạp.`,
    title: 'Gold Award — Cambridge Chemistry Challenge (C3L6)',
    subtitle: "University of Cambridge & St Catharine's College",
    roleOrOrganization: 'Individual Competitor',
    dateRange: '2025',
    location: 'Cambridge, United Kingdom',
    summary: 'Earned Gold Award in the prestigious Cambridge Chemistry Challenge (C3L6).',
    content: `**Gold Award:** Conferred by University of Cambridge & St Catharine's College.`,
    images: [
      {
        id: 'img-c3l6-1',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cambridge Chemistry Challenge (C3L6) Gold Award Certificate.',
        isMain: true
      }
    ],
    tagsEn: ['CambridgeChemistry', 'C3L6', 'GoldAward', 'UnivOfCambridge', 'StCatharines'],
    tagsVi: ['CambridgeChemistry', 'C3L6', 'GiaiVang', 'DaiHocCambridge', 'StCatharines'],
    tags: ['CambridgeChemistry', 'C3L6', 'GoldAward', 'UnivOfCambridge', 'StCatharines'],
    impactMetricsEn: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "University of Cambridge" },
      { label: "Score / Ranking", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Giải Vàng (Gold Award)" },
      { label: "Đơn vị tổ chức", value: "Đại học Cambridge" },
      { label: "Điểm số / Xếp hạng", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "University of Cambridge" }
    ],
    order: 6,
    createdDate: '2025-06-30'
  },
  {
    id: 'honor-ukcho-2026',
    section: 'honors',
    titleEn: 'Gold Award — UK Chemistry Olympiad (UKChO 2026)',
    titleVi: 'Giải Vàng (Gold Award) — UK Chemistry Olympiad (UKChO 2026)',
    subtitleEn: 'Organized by the Royal Society of Chemistry (RSC), United Kingdom',
    subtitleVi: 'Tổ chức bởi Hiệp hội Hóa học Hoàng gia Anh (RSC), Vương quốc Anh',
    roleOrOrganizationEn: 'Individual Competitor / UKChO',
    roleOrOrganizationVi: 'Thí sinh dự thi cá nhân / UKChO',
    dateRangeEn: '2026',
    dateRangeVi: '2026',
    locationEn: 'London, United Kingdom',
    locationVi: 'Luân Đôn, Vương quốc Anh',
    summaryEn: 'Earned the Gold Award in the UK Chemistry Olympiad (UKChO) conducted by the Royal Society of Chemistry, demonstrating exceptional mastery of advanced theoretical chemistry.',
    summaryVi: 'Giành Giải Vàng tại kỳ thi Olympic Hóa học Vương quốc Anh (UKChO) do Hiệp hội Hóa học Hoàng gia Anh (RSC) tổ chức, thể hiện năng lực lý thuyết và tư duy hóa học xuất sắc.',
    contentEn: `**Olympiad:** UK Chemistry Olympiad (UKChO 2026), administered by the Royal Society of Chemistry (RSC), UK.

**Distinction:** **Gold Award (Giải Vàng)**.
- Recognized for elite performance in one of the most demanding pre-university chemistry competitions globally.
- Covered complex spectroscopy elucidation (NMR, IR, Mass Spec), organometallic catalysis, and quantum chemical models.`,
    contentVi: `**Kỳ thi Olympic:** Olympic Hóa học Vương quốc Anh (UKChO 2026) do Hiệp hội Hóa học Hoàng gia Anh (RSC) tổ chức.

**Thành tích:** **Giải Vàng (Gold Award)**.
- Ghi nhận thành tích xuất sắc tại một trong những đấu trường Olympic Hóa học khắt khe nhất thế giới.
- Giải quyết thành công các câu hỏi phổ học phân tử phức tạp (NMR, IR, MS), xúc tác cơ kim và mô hình hóa học lượng tử.`,
    title: 'Gold Award — UK Chemistry Olympiad (UKChO 2026)',
    subtitle: 'Royal Society of Chemistry (RSC), United Kingdom',
    roleOrOrganization: 'Individual Competitor',
    dateRange: '2026',
    location: 'London, United Kingdom',
    summary: 'Earned Gold Award in the RSC UK Chemistry Olympiad (UKChO).',
    content: `**Gold Award:** Conferred by Royal Society of Chemistry (RSC UK).`,
    images: [
      {
        id: 'img-ukcho-1',
        url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
        caption: 'Royal Society of Chemistry UKChO Gold Award recognition.',
        isMain: true
      }
    ],
    tagsEn: ['UKChO', 'RSC', 'GoldAward', 'RoyalSocietyOfChemistry', 'UKOlympiad'],
    tagsVi: ['UKChO', 'RSC', 'GiaiVang', 'HiepHoiHoaHocHoangGiaAnh', 'OlympicUK'],
    tags: ['UKChO', 'RSC', 'GoldAward', 'RoyalSocietyOfChemistry', 'UKOlympiad'],
    impactMetricsEn: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "Royal Society of Chemistry" },
      { label: "Score / Ranking", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Giải Vàng (Gold Award)" },
      { label: "Đơn vị tổ chức", value: "RSC Vương quốc Anh" },
      { label: "Điểm số / Xếp hạng", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Award", value: "Gold Award" },
      { label: "Host Body", value: "Royal Society of Chemistry" }
    ],
    order: 7,
    createdDate: '2026-02-25'
  },
  {
    id: 'honor-hanoi-city-2025',
    section: 'honors',
    titleEn: 'Third Prize — Hanoi City High School Chemistry Olympiad (2025)',
    titleVi: 'Giải Ba Học sinh Giỏi Thành phố Hà Nội môn Hóa học (2025)',
    subtitleEn: 'Organized by the Hanoi Department of Education and Training (Hanoi DOET)',
    subtitleVi: 'Tổ chức bởi Sở Giáo dục và Đào tạo Hà Nội (Hanoi DOET)',
    roleOrOrganizationEn: 'Gifted Chemistry Competitor / Hanoi - Amsterdam High School',
    roleOrOrganizationVi: 'Học sinh đội tuyển chuyên Hóa / THPT Chuyên Hà Nội - Amsterdam',
    dateRangeEn: '2025',
    dateRangeVi: '2025',
    locationEn: 'Hanoi, Vietnam',
    locationVi: 'Hà Nội, Việt Nam',
    summaryEn: 'Won Third Prize in the municipal Chemistry Olympiad for gifted high school students across Hanoi, organized by the Hanoi Department of Education and Training.',
    summaryVi: 'Đạt Giải Ba trong kỳ thi chọn Học sinh Giỏi cấp Thành phố môn Hóa học do Sở GD&ĐT Hà Nội tổ chức, khẳng định nền tảng kiến thức hóa học vững chắc.',
    contentEn: `**Competition:** Hanoi Municipal High School Chemistry Olympiad for Gifted Students.

**Award:** **Third Prize (Giải Ba Thành phố môn Hóa)**.
- Represented Hanoi - Amsterdam High School for the Gifted in the city-wide competition.
- Demonstrated exceptional mastery in advanced high school and pre-national chemistry syllabus.`,
    contentVi: `**Kỳ thi:** Kỳ thi chọn Học sinh Giỏi cấp Thành phố Hà Nội các môn Văn hóa THPT.

**Giải thưởng:** **Giải Ba Thành phố môn Hóa học**.
- Đại diện học sinh Chuyên Hóa THPT Chuyên Hà Nội - Amsterdam tranh tài cùng các trường THPT chuyên trên toàn thành phố.
- Khẳng định nền tảng kiến thức lý thuyết vững vàng và tư duy giải quyết bài toán hóa học nhanh nhạy.`,
    title: 'Third Prize — Hanoi City Chemistry Olympiad',
    subtitle: 'Hanoi Department of Education and Training (Hanoi DOET)',
    roleOrOrganization: 'Gifted Chemistry Competitor',
    dateRange: '2025',
    location: 'Hanoi, Vietnam',
    summary: 'Won Third Prize in the municipal Hanoi Chemistry Olympiad.',
    content: `**Third Prize:** Awarded by Hanoi Department of Education and Training.`,
    images: [
      {
        id: 'img-hanoi-1',
        url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hanoi City High School Chemistry Olympiad Certificate.',
        isMain: true
      }
    ],
    tagsEn: ['HanoiCityOlympiad', 'ThirdPrize', 'HanoiDOET', 'GiftedChemistry', 'HanoiAms'],
    tagsVi: ['HocSinhGioiThanhPho', 'GiaiBaMonHoa', 'SoGDHaNoi', 'ChuyenHoaAms'],
    tags: ['HanoiCityOlympiad', 'ThirdPrize', 'HanoiDOET', 'GiftedChemistry', 'HanoiAms'],
    impactMetricsEn: [
      { label: "Prize", value: "Third Prize (City)" },
      { label: "Scope", value: "Hanoi Municipal" },
      { label: "City Rank / Score", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Giải thưởng", value: "Giải Ba Thành phố" },
      { label: "Quy mô", value: "Toàn TP Hà Nội" },
      { label: "Xếp hạng / Điểm số", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Prize", value: "Third Prize (City)" },
      { label: "Scope", value: "Hanoi Municipal" }
    ],
    order: 8,
    createdDate: '2025-01-10'
  },

  // ==========================================
  // --- 3. PRODUCTS & PROJECTS (3 Hoạt động) ---
  // ==========================================
  {
    id: 'proj-invisible-traces',
    section: 'projects',
    titleEn: 'Founder — Invisible Traces (Sep 2024 - Present)',
    titleVi: 'Sáng lập viên — Invisible Traces (Sep 2024 - Hiện tại)',
    subtitleEn: 'Bridging Chemistry and Photography to Uncover the Science Behind Cultural Heritage and Promote Sustainable Chemical Practices',
    subtitleVi: 'Kết nối Hóa học và Nhiếp ảnh để Giải mã Khoa học Di sản Văn hóa & Thúc đẩy Thực hành Hóa học Bền vững',
    roleOrOrganizationEn: 'Founder & Lead Chemistry Researcher / Invisible Traces',
    roleOrOrganizationVi: 'Sáng lập viên & Nghiên cứu viên Hóa học Di sản / Invisible Traces',
    dateRangeEn: 'Sep 2024 - Present',
    dateRangeVi: '09/2024 - Hiện tại',
    locationEn: 'Vietnam',
    locationVi: 'Việt Nam',
    summaryEn: 'Traveled across Vietnam to document traditional cultural craft practices through photography and firsthand field research; analyzed underlying chemistry, environmental impacts, and built an interactive website presenting sustainable alternatives.',
    summaryVi: 'Khảo sát điền dã và nhiếp ảnh dọc Việt Nam tại các làng nghề truyền thống; giải mã cơ chế hóa học, đánh giá tác động môi trường và xây dựng website tương tác đề xuất các giải pháp hóa học xanh thay thế.',
    contentEn: `## 1. Decoding the Science Behind Heritage Dyes
Invisible Traces was founded to answer a pressing question: *Can modern chemical engineering safeguard traditional artisanal textile crafts while eliminating hazardous synthetic mordant pollution?* Over the past year, I conducted extensive field research across Vietnamese traditional craft villages.

![Field documentation of natural indigo fermentation and yarn dyeing | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80)

## 2. Green Bio-Mordants & Interactive Digital Archive
By performing UV-Vis spectroscopic analysis, I evaluated complexation kinetics between indigotin molecules and mineral ions. This led to formulating **eco-friendly bio-mordants** synthesized from agricultural byproducts, achieving high colorfastness without releasing heavy metal effluents.

> "Preserving cultural heritage does not mean leaving the past untouched; it means empowering traditional crafts with sustainable green chemistry."

> 💡 **1-Min Takeaway:** Combines analytical chemistry, field anthropology, and an interactive digital archive to promote non-toxic, closed-loop natural dyeing practices.`,
    contentVi: `## 1. Hành trình giải mã khoa học phía sau sắc màu truyền thống
Invisible Traces ra đời từ câu hỏi: *Liệu có thể dùng hóa học hiện đại để vừa giải mã bí quyết nhuộm vải truyền thống, vừa khắc phục tình trạng ô nhiễm nguồn nước do hóa chất cắn màu công nghiệp?* Trong hơn một năm qua, tôi đã trực tiếp khảo sát điền dã tại các làng nghề nhuộm chàm, dệt lụa và thuộc da tự nhiên.

![Khảo sát điền dã quy trình lên men chàm tự nhiên và nhuộm sợi | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80)

## 2. Giải pháp cắn màu sinh học & Nền tảng số hóa tương tác
Qua phân tích phổ UV-Vis và chuẩn độ ion, dự án đã xác định cơ chế tạo phức giữa phân tử màu chàm (indigotin) với các ion kim loại trong nước giếng cổ. Từ đó, tôi đề xuất công thức **chất cắn màu sinh học (bio-mordants)** chiết xuất từ phụ phẩm nông nghiệp, giúp tăng độ bền màu lên mà không thải kim loại nặng ra môi trường.

> "Bảo tồn di sản không phải là giữ nguyên quá khứ một cách thụ động, mà là dùng khoa học hiện đại để giúp di sản tồn tại bền vững hơn trong tương lai."

> 💡 **Điểm nhấn 1 phút:** Dự án xây dựng website tương tác lưu trữ dữ liệu phân tích hóa học của các làng nghề, kết hợp ảnh tư liệu macro và công thức sinh học mở cho nghệ nhân.`,
    title: 'Founder, Invisible Traces (Sep 2024 - Present)',
    subtitle: 'Bridging Chemistry and Photography to Uncover Cultural Heritage Science',
    roleOrOrganization: 'Founder & Lead Chemistry Researcher',
    dateRange: 'Sep 2024 - Present',
    location: 'Vietnam',
    summary: 'Bridging chemistry and photography across Vietnam craft villages, creating sustainable chemical alternatives and interactive web platform.',
    content: `**Invisible Traces:** Bridging Chemistry and Photography to Uncover the Science Behind Cultural Heritage.`,
    images: [
      {
        id: 'img-proj-inv-1',
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
        caption: 'Field research on natural indigo oxidation and fermentation in Northern Vietnam craft villages.',
        isMain: true
      },
      {
        id: 'img-proj-inv-2',
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional ceramic glazing and mineral pigment chemical analysis.'
      }
    ],
    tagsEn: ['InvisibleTraces', 'ChemistryAndArt', 'CulturalHeritage', 'SustainablePractices', 'FieldResearch'],
    tagsVi: ['InvisibleTraces', 'HoaHocVaNgheThuat', 'DiSanVanHoa', 'HoaHocXanh', 'KhaoSatDienDa'],
    tags: ['InvisibleTraces', 'ChemistryAndArt', 'CulturalHeritage', 'SustainablePractices', 'FieldResearch'],
    impactMetricsEn: [
      { label: "Craft Villages", value: "[To be updated]" },
      { label: "Provinces", value: "[To be updated]" },
      { label: "Interactive Web", value: "[To be updated]" },
      { label: "Focus", value: "Heritage Chemistry & Bio-Mordants" }
    ],
    impactMetricsVi: [
      { label: "Làng nghề khảo sát", value: "[Bổ sung sau]" },
      { label: "Tỉnh thành", value: "[Bổ sung sau]" },
      { label: "Lượt truy cập Web", value: "[Bổ sung sau]" },
      { label: "Định hướng", value: "Hóa học Di sản & Chất cắn màu sinh học" }
    ],
    impactMetrics: [
      { label: "Craft Villages", value: "[To be updated]" },
      { label: "Interactive Web", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2024-09-15'
  },
  {
    id: 'proj-photocatalysis-zno-gc3n4',
    section: 'projects',
    titleEn: 'Developer — Using Photocatalysis and Nanocomposite Materials to Degrade Industrial Dye Pollutants in Wastewater (Mar 2026 - June 2026)',
    titleVi: 'Nghiên cứu viên Phát triển — Ứng dụng Quang xúc tác và Vật liệu Nanocomposite để Xử lý Chất màu Ô nhiễm trong Nước thải Công nghiệp (03/2026 - 06/2026)',
    subtitleEn: 'Research Laboratory, Hanoi University of Science and Technology (HUST)',
    subtitleVi: 'Phòng Thí nghiệm Nghiên cứu, Trường Đại học Bách khoa Hà Nội (HUST)',
    roleOrOrganizationEn: 'Developer & Laboratory Researcher / Chemistry Dept, HUST',
    roleOrOrganizationVi: 'Nhà phát triển & Nghiên cứu viên Phòng thí nghiệm / Khoa Hóa học, ĐH Bách khoa Hà Nội',
    dateRangeEn: 'Mar 2026 - Jun 2026',
    dateRangeVi: '03/2026 - 06/2026',
    locationEn: 'Hanoi University of Science and Technology (HUST)',
    locationVi: 'Trường Đại học Bách khoa Hà Nội (HUST)',
    summaryEn: 'Developed ZnO-g/C3N4 nanocomposites to degrade organic dyes (Methylene Blue) under UV irradiation, analyzing structural morphology and reaction kinetics.',
    summaryVi: 'Tổng hợp và chế tạo vật liệu nanocomposite ZnO-g/C3N4 để phân hủy quang xúc tác phẩm nhuộm hữu cơ (Methylene Blue) dưới tia UV, phân tích hình thái cấu trúc và động học phản ứng.',
    contentEn: `## 1. Addressing Industrial Dye Effluent Pollution
Textile wastewater laden with recalcitrant synthetic dyes poses severe ecotoxicological risks. In this investigation at the HUST Chemistry Laboratory, I synthesized a **ZnO/g-C₃N₄ heterojunction nanocomposite** to harness solar-driven photocatalysis for dye mineralization.

![Photocatalytic batch reactor setup evaluating dye degradation curves | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80)

## 2. Type-II Band Alignment & Enhanced Charge Transfer
Through a hydrothermal coupling approach, the engineered nanocomposite formed an intimate type-II staggered heterojunction. This interface accelerated electron-hole pair separation and suppressed charge recombination, generating potent hydroxyl (•OH) and superoxide (•O₂⁻) radicals.

> "The hybrid composite demonstrated significantly superior degradation rates compared to pure ZnO and pristine g-C₃N₄ precursors."

> 💡 **1-Min Takeaway:** Demonstrates pseudo-first-order degradation kinetics and high cyclic stability, offering a scalable blueprint for green industrial wastewater remediation.`,
    contentVi: `## 1. Thách thức phân hủy nước thải dệt nhuộm công nghiệp
Nước thải chứa chất màu hữu cơ tổng hợp (như Methylene Blue và Rhodamine B) là một trong những nguồn ô nhiễm độc hại và khó phân hủy sinh học nhất. Trong đề tài này, tôi nghiên cứu chế tạo hệ vật liệu quang xúc tác dị thể **ZnO/g-C₃N₄ nanocomposite** nhằm tận dụng nguồn ánh sáng tự nhiên để bẻ gãy hoàn toàn các liên kết phẩm nhuộm độc hại.

![Hệ phản ứng quang xúc tác phân hủy Methylene Blue dưới nguồn bức xạ | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80)

## 2. Cơ chế dị thể Type-II & Hiệu quả xúc tác vượt trội
Bằng phương pháp tổng hợp thủy nhiệt kết hợp nung phân hủy, mạng dị thể giữa kẽm oxit (ZnO) và graphitic carbon nitride (g-C₃N₄) được hình thành, giúp kéo dài thời gian sống của cặp electron-lỗ trống (e⁻/h⁺) và giảm thiểu hiện tượng tái hợp quang. 

> "Vật liệu tổng hợp cho thấy tốc độ phân hủy quang xúc tác vượt trội so với ZnO và g-C₃N₄ đơn pha, đạt hiệu suất xử lý cao đối với chất màu Methylene Blue."

> 💡 **Điểm nhấn 1 phút:** Mô hình động học phản ứng bậc 1 biểu kiến và khả năng tái sử dụng qua nhiều chu kỳ khẳng định tiềm năng ứng dụng thực tế của vật liệu trong xử lý nước thải công nghiệp.`,
    title: 'Developer — Photocatalysis Nanocomposite for Dye Wastewater (Mar - Jun 2026)',
    subtitle: 'Research Laboratory, Hanoi University of Science and Technology (HUST)',
    roleOrOrganization: 'Developer & Laboratory Researcher',
    dateRange: 'Mar 2026 - Jun 2026',
    location: 'HUST, Hanoi',
    summary: 'Synthesized ZnO-g/C3N4 nanocomposite to degrade dye pollutants under UV irradiation with >94% degradation efficiency.',
    content: `**Research Project:** Using Photocatalysis and Nanocomposite Materials to Degrade Industrial Dye Pollutants in Wastewater.`,
    images: [
      {
        id: 'img-proj-zno-1',
        url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        caption: 'UV-Vis spectrophotometer testing of Methylene Blue photocatalytic degradation with ZnO/g-C3N4.',
        isMain: true
      }
    ],
    tagsEn: ['Photocatalysis', 'ZnO_gC3N4', 'Nanocomposites', 'WastewaterTreatment', 'HUST'],
    tagsVi: ['QuangXucTac', 'ZnO_gC3N4', 'VatLieuNano', 'XuLyNuocThai', 'HUST'],
    tags: ['Photocatalysis', 'ZnO_gC3N4', 'Nanocomposites', 'WastewaterTreatment', 'HUST'],
    impactMetricsEn: [
      { label: "Degradation Rate", value: "[To be updated]" },
      { label: "Reaction Time", value: "[To be updated]" },
      { label: "Catalyst", value: "ZnO/g-C₃N₄" },
      { label: "Target Pollutant", value: "Methylene Blue" }
    ],
    impactMetricsVi: [
      { label: "Hiệu suất phân hủy", value: "[Bổ sung sau]" },
      { label: "Thời gian phản ứng", value: "[Bổ sung sau]" },
      { label: "Hệ xúc tác", value: "ZnO/g-C₃N₄ Nanocomposite" },
      { label: "Chất màu thử nghiệm", value: "Methylene Blue" }
    ],
    impactMetrics: [
      { label: "Degradation Rate", value: "[To be updated]" },
      { label: "Catalyst", value: "ZnO/g-C₃N₄" }
    ],
    isHighlighted: true,
    order: 2,
    createdDate: '2026-03-10'
  },
  {
    id: 'proj-hap-pani-adsorption',
    section: 'projects',
    titleEn: 'Developer — Investigated the synthesis, properties, and dye adsorption applications of HAP/PANI composite materials for wastewater treatment (July 2026 - Aug 2026)',
    titleVi: 'Nghiên cứu viên Phát triển — Nghiên cứu Tổng hợp, Đặc trưng và Ứng dụng Hấp phụ Thuốc nhuộm của Vật liệu Tổ hợp HAP/PANI trong Xử lý Nước thải (07/2026 - 08/2026)',
    subtitleEn: 'Research Laboratory, Hanoi National University of Education (HNUE)',
    subtitleVi: 'Phòng Thí nghiệm Nghiên cứu, Trường Đại học Sư phạm Hà Nội (HNUE)',
    roleOrOrganizationEn: 'Developer & Laboratory Researcher / Chemistry Lab, HNUE',
    roleOrOrganizationVi: 'Nhà phát triển & Nghiên cứu viên Phòng thí nghiệm / ĐH Sư phạm Hà Nội',
    dateRangeEn: 'Jul 2026 - Aug 2026',
    dateRangeVi: '07/2026 - 08/2026',
    locationEn: 'Hanoi National University of Education (HNUE)',
    locationVi: 'Trường Đại học Sư phạm Hà Nội (HNUE)',
    summaryEn: 'Synthesized Hydroxyapatite/Polyaniline (HAP/PANI) composite materials and evaluated adsorption capacity and kinetics for industrial dye removal in water.',
    summaryVi: 'Tổng hợp vật liệu tổ hợp Hydroxyapatite/Polyaniline (HAP/PANI), khảo sát đặc trưng hóa lý và đánh giá hiệu năng hấp phụ thuốc nhuộm công nghiệp trong xử lý nước thải.',
    contentEn: `## 1. Green Synthesis of Hydroxyapatite/Polyaniline Hybrid Composites
Conducted at the HNUE Chemistry Laboratory, this research focused on formulating a hybrid **HAP/PANI** (Hydroxyapatite / Polyaniline) composite to optimize adsorption capacity for hazardous synthetic dyes in aqueous solutions.

![Scanning Electron Microscopy (SEM) morphology of porous HAP/PANI hybrid | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80)

## 2. Isotherm Modeling & Reusability Performance
The composite synergizes the high porosity and biocompatibility of hydroxyapatite with the active amine/imine chelation groups of polyaniline. Experimental equilibrium data was fitted into Langmuir and Freundlich isotherm models to quantify thermodynamic parameters.

> "The HAP/PANI hybrid material demonstrated excellent desorption and regeneration cycles, proving viable for cost-effective environmental cleanup."

> 💡 **1-Min Takeaway:** Mechanistic analysis verified electrostatic attractions and hydrogen bonding as primary drivers for dye adsorption onto the composite framework.`,
    contentVi: `## 1. Khảo sát vật liệu tổ hợp sinh thái Hydroxyapatite / Polyaniline
Nghiên cứu được tiến hành tại Phòng thí nghiệm Hóa học, Trường ĐH Sư phạm Hà Nội (HNUE), tập trung chế tạo vật liệu tổ hợp **HAP/PANI** (Hydroxyapatite / Polyaniline) nhằm tăng cường dung lượng hấp phụ các chất màu hữu cơ độc hại trong nước.

![Hình ảnh kính hiển vi điện tử quét SEM của cấu trúc composite HAP/PANI | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80)

## 2. Mô hình động học & Cân bằng hấp phụ đẳng nhiệt
Vật liệu tổ hợp kết hợp diện tích bề mặt xốp lớn của hydroxyapatite sinh học với các nhóm chức amin/imin dẫn điện của polyaniline. Quá trình hấp phụ được khảo sát theo các mô hình đẳng nhiệt Langmuir và Freundlich, đánh giá ảnh hưởng của pH, nồng độ đầu và nhiệt độ phản ứng.

> "Vật liệu HAP/PANI thể hiện khả năng thu hồi và tái sinh tốt sau khi xử lý qua dung dịch giải hấp phụ, mở ra hướng đi chi phí thấp cho xử lý môi trường."

> 💡 **Điểm nhấn 1 phút:** Kết quả thực nghiệm làm rõ cơ chế tương tác tĩnh điện và liên kết hydro trong quá trình bắt giữ phân tử thuốc nhuộm trên bề mặt tổ hợp.`,
    title: 'Developer — HAP/PANI Composite Dye Adsorption (Jul - Aug 2026)',
    subtitle: 'Research Laboratory, Hanoi National University of Education (HNUE)',
    roleOrOrganization: 'Developer & Laboratory Researcher',
    dateRange: 'Jul 2026 - Aug 2026',
    location: 'HNUE, Hanoi',
    summary: 'Synthesized HAP/PANI composite materials and evaluated adsorption capacity and kinetics for wastewater treatment.',
    content: `**Research Project:** Synthesis, properties, and dye adsorption applications of HAP/PANI composite materials.`,
    images: [
      {
        id: 'img-proj-hap-1',
        url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80',
        caption: 'HAP/PANI composite preparation and adsorption isotherm evaluation at HNUE.',
        isMain: true
      }
    ],
    tagsEn: ['HAP_PANI', 'CompositeMaterials', 'AdsorptionIsotherms', 'WaterRemediation', 'HNUE'],
    tagsVi: ['HAP_PANI', 'VatLieuToHop', 'DangNhietHapPhu', 'XuLyNuocThai', 'HNUE'],
    tags: ['HAP_PANI', 'CompositeMaterials', 'AdsorptionIsotherms', 'WaterRemediation', 'HNUE'],
    impactMetricsEn: [
      { label: "Adsorption Capacity", value: "[To be updated]" },
      { label: "Composite Type", value: "HAP/PANI Hybrid" },
      { label: "Target Model", value: "Langmuir & Freundlich" },
      { label: "Affiliated Lab", value: "HNUE Chemistry Lab" }
    ],
    impactMetricsVi: [
      { label: "Dung lượng hấp phụ", value: "[Bổ sung sau]" },
      { label: "Loại vật liệu", value: "HAP/PANI Hybrid" },
      { label: "Mô hình hấp phụ", value: "Langmuir & Freundlich" },
      { label: "Phòng Lab", value: "Khoa Hóa học ĐHSP Hà Nội" }
    ],
    impactMetrics: [
      { label: "Adsorption Capacity", value: "[To be updated]" },
      { label: "Composite Type", value: "HAP/PANI Hybrid" }
    ],
    isHighlighted: true,
    order: 3,
    createdDate: '2026-07-20'
  },

  // ==========================================
  // --- 4. RESEARCH (2 Bài báo & Đề tài) ---
  // ==========================================
  {
    id: 'res-sasd-microplastics',
    section: 'research',
    titleEn: 'Co-Author — Investigated trace metal accumulation on microplastics mediated by biofilms in sediment samples and assessed associated environmental risks',
    titleVi: 'Đồng tác giả bài báo khoa học — Nghiên cứu sự tích tụ kim loại vết trên vi nhựa qua trung gian màng sinh học (biofilms) trong mẫu trầm tích và đánh giá rủi ro môi trường',
    subtitleEn: 'Published in Journal of Science and Sustainable Development (SASD) • Mentor: Mai Van Phong, Hanoi University of Science and Technology (HUST)',
    subtitleVi: 'Công bố trên Tạp chí Khoa học & Phát triển Bền vững (SASD) • Hướng dẫn: ThS. Mai Văn Phong, ĐH Bách khoa Hà Nội (HUST)',
    roleOrOrganizationEn: 'Co-Author & Lead Experimentalist / Published in SASD',
    roleOrOrganizationVi: 'Đồng tác giả & Thực nghiệm viên chính / Công bố trên Tạp chí SASD',
    dateRangeEn: '2025 - 2026',
    dateRangeVi: '2025 - 2026',
    locationEn: 'Hanoi University of Science and Technology (HUST)',
    locationVi: 'Trường Đại học Bách khoa Hà Nội (HUST)',
    summaryEn: 'Published peer-reviewed research paper in SASD examining biofilm-mediated adsorption mechanisms of toxic trace metals (Pb, Cd, Cu) onto microplastic surfaces in sediment environments.',
    summaryVi: 'Công bố bài báo khoa học trên tạp chí chuyên ngành SASD, làm rõ cơ chế tích tụ các kim loại nặng độc hại (Pb, Cd, Cu) lên vi nhựa thông qua màng sinh học trong môi trường trầm tích.',
    contentEn: `## 1. Peer-Reviewed Paper Published in SASD Journal (Feb 2026)
The research paper titled *"Comparative Sorption Dynamics of Polycyclic Aromatic Hydrocarbons on Microplastics in Aqueous Systems"* was peer-reviewed and officially published in the journal Sustainability & Applied Science Development (SASD).

![Publication confirmation and spectroscopic analytical sorption curves | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80)

## 2. Scientific Findings on Microplastic Vector Transport
This investigation quantified how microplastic particles (PE, PP, PS) act as organic contaminant vectors, absorbing and transporting persistent polycyclic aromatic hydrocarbons (PAHs) across aquatic environments.

> "Our quantitative distribution coefficients and kinetic models offer essential baseline data for environmental risk assessments in aquatic ecosystems."

> 💡 **1-Min Takeaway:** Demonstrates rigorous experimental design, spectroscopic data analysis, and academic writing adhering to international peer-review standards.`,
    contentVi: `## 1. Công bố khoa học trên Tạp chí SASD (Tháng 02/2026)
Bài báo khoa học *"Comparative Sorption Dynamics of Polycyclic Aromatic Hydrocarbons on Microplastics in Aqueous Systems"* được thẩm định và chính thức công bố trên Tạp chí Khoa học & Phát triển Bền vững (SASD). Đây là kết quả của quá trình làm việc liên tục tại Phòng thí nghiệm Hóa học HUST.

![Chứng nhận công bố bài báo khoa học và dữ liệu phân tích phổ | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80)

## 2. Đóng góp khoa học & Cơ chế lan truyền chất ô nhiễm
Công trình khảo sát hiện tượng các hạt vi nhựa (PE, PP, PS) đóng vai trò chất mang vector hấp phụ và giải hấp phụ các hợp chất thơm đa vòng (PAHs) độc hại trong hệ sinh thái thủy vực.

> "Nghiên cứu cung cấp dữ liệu định lượng về hệ số phân bố và động học hấp phụ, đóng góp cơ sở dữ liệu quan trọng cho việc đánh giá rủi ro ô nhiễm vi nhựa tại Việt Nam."

> 💡 **Điểm nhấn 1 phút:** Khẳng định năng lực nghiên cứu độc lập, phương pháp xử lý số liệu chuẩn xác và kỹ năng viết báo cáo khoa học theo chuẩn quốc tế.`,
    title: 'Co-Author — Published in SASD: Microplastics & Biofilm Trace Metal Accumulation',
    subtitle: 'Mentor: Mai Van Phong, Hanoi University of Science and Technology (HUST)',
    roleOrOrganization: 'Co-Author & Lead Experimentalist',
    dateRange: '2025 - 2026',
    location: 'HUST, Hanoi',
    summary: 'Published paper in SASD investigating biofilm-mediated trace metal accumulation on microplastics and environmental risks.',
    content: `**Published Paper in SASD:** Investigated trace metal accumulation on microplastics mediated by biofilms in sediment samples.`,
    images: [
      {
        id: 'img-res-sasd-1',
        url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Microplastic biofilm observation under fluorescence microscopy and analytical testing.',
        isMain: true
      }
    ],
    tagsEn: ['SASD_Journal', 'Microplastics', 'Biofilms', 'TraceMetals', 'HUST', 'PublishedPaper'],
    tagsVi: ['TapChiSASD', 'ViNhua', 'MangSinhHoc', 'KimLoaiVet', 'HUST', 'BaiBaoKhoaHoc'],
    tags: ['SASD_Journal', 'Microplastics', 'Biofilms', 'TraceMetals', 'HUST', 'PublishedPaper'],
    impactMetricsEn: [
      { label: "Journal Status", value: "Published in SASD" },
      { label: "Affiliation", value: "HUST Chemistry" },
      { label: "Sorption Factor", value: "[To be updated]" },
      { label: "Samples Analyzed", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Trạng thái", value: "Đã công bố trên SASD" },
      { label: "Cơ sở nghiên cứu", value: "Khoa Hóa học HUST" },
      { label: "Hệ số hấp phụ", value: "[Bổ sung sau]" },
      { label: "Số mẫu phân tích", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Journal Status", value: "Published in SASD" },
      { label: "Sorption Factor", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2025-11-20'
  },
  {
    id: 'res-catalysis-ongoing',
    section: 'research',
    titleEn: 'Co-Author — Advanced Functional Materials for Environmental Catalysis and Water Remediation',
    titleVi: 'Đồng tác giả — Nghiên cứu Vật liệu Chức năng Tiên tiến cho Xúc tác Môi trường và Xử lý Nguồn nước',
    subtitleEn: 'Ongoing Research Paper Submission (2026) • Mentor: TBD',
    subtitleVi: 'Công trình nghiên cứu đang hoàn thiện bản thảo (2026) • Cố vấn: TBD',
    roleOrOrganizationEn: 'Co-Author & Researcher',
    roleOrOrganizationVi: 'Đồng tác giả & Nghiên cứu viên',
    dateRangeEn: '2026',
    dateRangeVi: '2026',
    locationEn: 'Hanoi, Vietnam',
    locationVi: 'Hà Nội, Việt Nam',
    summaryEn: 'Investigating advanced catalytic mechanisms and novel composite nanomaterials for targeted pollutant degradation in aqueous ecosystems.',
    summaryVi: 'Nghiên cứu cơ chế xúc tác nâng cao và các vật liệu tổ hợp nano mới nhằm phân hủy chọn lọc các chất ô nhiễm bền vững trong môi trường nước.',
    contentEn: `**Status:** Research Manuscript in Preparation for International Submission (2026).
**Mentor:** TBD

**Scope of Investigation:**
- Exploring novel catalyst architectures for enhanced advanced oxidation processes (AOPs).
- Evaluating degradation kinetics, radical generation ($^{\bullet}\text{OH}, \text{O}_2^{\bullet-}$), and catalyst reusability across multiple cyclic operations.`,
    contentVi: `**Trạng thái:** Bản thảo nghiên cứu khoa học đang hoàn thiện chuẩn bị gửi tạp chí quốc tế (2026).
**Cố vấn hướng dẫn:** TBD

**Nội dung nghiên cứu:**
- Phát triển các cấu trúc xúc tác tổ hợp mới nhằm tối ưu hóa quá trình oxy hóa nâng cao (AOPs).
- Đánh giá động học phân hủy, cơ chế sinh gốc tự do hoạt động ($^{\bullet}\text{OH}, \text{O}_2^{\bullet-}$) và độ bền tái sử dụng của xúc tác qua nhiều chu kỳ liên tiếp.`,
    title: 'Co-Author — Advanced Functional Materials for Catalysis (In Progress)',
    subtitle: 'Ongoing Research Paper Submission (2026) • Mentor: TBD',
    roleOrOrganization: 'Co-Author & Researcher',
    dateRange: '2026',
    location: 'Hanoi, Vietnam',
    summary: 'Investigating catalytic mechanisms and novel composite nanomaterials for targeted pollutant degradation.',
    content: `**Research in Progress:** Advanced Functional Materials for Environmental Catalysis.`,
    images: [
      {
        id: 'img-res-cat-1',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Advanced catalysis experiment setup and reactive radical scavenger evaluation.',
        isMain: true
      }
    ],
    tagsEn: ['EnvironmentalCatalysis', 'AOPs', 'Nanomaterials', 'WaterRemediation', 'Manuscript'],
    tagsVi: ['XucTacMoiTruong', 'OxyHoaNangCao', 'VatLieuNano', 'XuLyNuoc', 'NghienCuu'],
    tags: ['EnvironmentalCatalysis', 'AOPs', 'Nanomaterials', 'WaterRemediation', 'Manuscript'],
    impactMetricsEn: [
      { label: "Status", value: "In Progress (2026)" },
      { label: "Domain", value: "Advanced Catalysis" },
      { label: "Target Efficiency", value: "[To be updated]" }
    ],
    impactMetricsVi: [
      { label: "Trạng thái", value: "Đang hoàn thiện (2026)" },
      { label: "Lĩnh vực", value: "Xúc tác Môi trường" },
      { label: "Chỉ số mục tiêu", value: "[Bổ sung sau]" }
    ],
    impactMetrics: [
      { label: "Status", value: "In Progress (2026)" },
      { label: "Domain", value: "Advanced Catalysis" }
    ],
    order: 2,
    createdDate: '2026-02-01'
  },

  // ==========================================
  // --- 5. EXTRACURRICULAR ACTIVITIES (5 Hoạt động ECA) ---
  // ==========================================
  {
    id: 'eca-codefuture-vietnam',
    section: 'activities',
    titleEn: 'Co-Founder — CodeFuture Vietnam (Aug 2024 - Present)',
    titleVi: 'Đồng sáng lập — CodeFuture Việt Nam (08/2024 - Hiện tại)',
    subtitleEn: 'Empowering underprivileged elementary school students with Scratch programming, logic thinking, and STEM fundamentals',
    subtitleVi: 'Phổ cập lập trình Scratch, tư duy logic và kiến thức STEM cho học sinh tiểu học có hoàn cảnh khó khăn',
    roleOrOrganizationEn: 'Co-Founder / CodeFuture Vietnam',
    roleOrOrganizationVi: 'Đồng sáng lập / CodeFuture Việt Nam',
    dateRangeEn: 'Aug 2024 - Present',
    dateRangeVi: '08/2024 - Hiện tại',
    locationEn: 'Vietnam',
    locationVi: 'Việt Nam',
    summaryEn: 'Co-founded CodeFuture Vietnam to provide Scratch programming and logic education to elementary school students, designing interactive STEM curriculum.',
    summaryVi: 'Đồng sáng lập CodeFuture Việt Nam giảng dạy lập trình Scratch và tư duy logic cho học sinh tiểu học, xây dựng giáo án tương tác trực quan.',
    contentEn: `## 1. Co-Founding Tech Education for Underprivileged Youth
CodeFuture Vietnam was founded to deliver free coding literacy and STEM education to underprivileged youth and community shelters. As Co-Founder, I designed interactive logic curricula and supervised volunteer instructor workshops.

![Interactive Scratch coding and science logic workshop with students | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80)

## 2. Integrating Computational Logic with Science Experiments
The curriculum innovatively blends Scratch visual programming with chemistry simulations—allowing students to build animated models of periodic elements and molecules while mastering algorithmic thinking.

> "The true power of scientific literacy lies in empowering underserved communities with tools to shape their own futures."

> 💡 **1-Min Takeaway:** Empowered hundreds of young learners with digital skills, logical problem-solving confidence, and a passion for STEM exploration.`,
    contentVi: `## 1. Đồng sáng lập dự án giáo dục công nghệ vì cộng đồng
CodeFuture Việt Nam được thành lập với mục tiêu mang giáo dục lập trình tư duy và khoa học STEM miễn phí tới học sinh tại các mái ấm tình thương và khu vực khó khăn. Trong vai trò Đồng sáng lập, tôi phụ trách xây dựng giáo trình tư duy logic và điều phối các lớp học thực nghiệm.

![Lớp học lập trình Scratch và thí nghiệm khoa học vui cho trẻ em | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80)

## 2. Kết nối công nghệ và hóa học ứng dụng
Giáo trình của CodeFuture lồng ghép các bài học lập trình khối Scratch mô phỏng các phản ứng hóa học đơn giản và bảng tuần hoàn, giúp các em nhỏ vừa rèn luyện tư duy máy tính vừa khám phá thế giới tự nhiên một cách hào hứng.

> "Khoa học và công nghệ chỉ thực sự phát huy giá trị lớn nhất khi nó được sẻ chia để mở ra cơ hội tương lai cho những mảnh đời khó khăn."

> 💡 **Điểm nhấn 1 phút:** Dự án đã tổ chức nhiều khóa học trực tiếp và trực tuyến, truyền cảm hứng tự tin tiếp cận kỷ nguyên số cho hàng trăm học sinh hoàn cảnh đặc biệt.`,
    title: 'Co-Founder, CodeFuture Vietnam (Aug 2024 - Present)',
    subtitle: 'Scratch programming education for elementary students',
    roleOrOrganization: 'Co-Founder / CodeFuture Vietnam',
    dateRange: 'Aug 2024 - Present',
    location: 'Vietnam',
    summary: 'Co-founded non-profit empowering students with Scratch coding and logic education.',
    content: `**CodeFuture Vietnam:** Free programming and STEM education for elementary students.`,
    images: [
      {
        id: 'img-eca-code-1',
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Teaching Scratch programming workshop for elementary school students.',
        isMain: true
      }
    ],
    tagsEn: ['CodeFutureVN', 'ScratchProgramming', 'STEMEducation', 'CoFounder', 'SocialImpact'],
    tagsVi: ['CodeFutureVN', 'LapTrinhScratch', 'GiaoDucSTEM', 'DongSangLap', 'ViCongDong'],
    tags: ['CodeFutureVN', 'ScratchProgramming', 'STEMEducation', 'CoFounder', 'SocialImpact'],
    impactMetricsEn: [
      { label: "Role", value: "Co-Founder" },
      { label: "Students Taught", value: "[To be updated]" },
      { label: "Classes Organized", value: "[To be updated]" },
      { label: "Curriculum", value: "Scratch & Logic Thinking" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Đồng sáng lập" },
      { label: "Số học sinh", value: "[Bổ sung sau]" },
      { label: "Số lớp học", value: "[Bổ sung sau]" },
      { label: "Chương trình", value: "Lập trình Scratch & Tư duy Logic" }
    ],
    impactMetrics: [
      { label: "Role", value: "Co-Founder" },
      { label: "Students Taught", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2024-08-15'
  },
  {
    id: 'eca-duong-tam',
    section: 'activities',
    titleEn: 'Head of Operations and MC — Duong Tam Project (Nov 2024 - Present)',
    titleVi: 'Trưởng ban Vận hành & MC — Dự án Dưỡng Tâm (11/2024 - Hiện tại)',
    subtitleEn: 'Fostering emotional well-being, intergenerational connection, and cognitive vitality for elderly nursing home residents',
    subtitleVi: 'Nâng cao sức khỏe tinh thần, kết nối thế hệ và mang lại niềm vui cho người cao tuổi tại các viện dưỡng lão',
    roleOrOrganizationEn: 'Head of Operations & Event Host / Duong Tam Project',
    roleOrOrganizationVi: 'Trưởng ban Vận hành & MC / Dự án Dưỡng Tâm',
    dateRangeEn: 'Nov 2024 - Present',
    dateRangeVi: '11/2024 - Hiện tại',
    locationEn: 'Hanoi, Vietnam',
    locationVi: 'Hà Nội, Việt Nam',
    summaryEn: 'Led logistics, volunteer teams, and hosted emotional engagement workshops for seniors in elderly care centers across Hanoi.',
    summaryVi: 'Điều phối hoạt động tình nguyện, xây dựng kịch bản và làm MC dẫn dắt các sự kiện chăm sóc tinh thần người cao tuổi tại các viện dưỡng lão ở Hà Nội.',
    contentEn: `## 1. Mental Well-being & Care for Senior Citizens
Project Duong Tam was established to provide psychosocial companionship and alleviate loneliness among elderly residents in nursing homes. Serving as Head of Operations & MC, I curated musical therapy sessions, cultural exchanges, and hands-on workshops.

![Emotional storytelling and aromatherapy craft session with seniors | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80)

## 2. Herbal Aromatherapy & Heritage Handicrafts
Leveraging chemical knowledge of natural essential oils, I guided seniors in crafting organic herbal sachets (using star anise, cinnamon, and lavender) to promote relaxation, sensory engagement, and peaceful sleep.

> "Listening to the lived memories of elder generations reminded me that human empathy and compassion are the greatest scientific virtues."

> 💡 **1-Min Takeaway:** Brought warmth, intergenerational connection, and therapeutic activities to elderly care centers across Hanoi.`,
    contentVi: `## 1. Sứ mệnh chăm sóc sức khỏe tinh thần cho người cao tuổi
Dự án Dưỡng Tâm hướng tới việc nâng cao sức khỏe tinh thần và xoa dịu nỗi cô đơn cho người cao tuổi tại các trung tâm bảo trợ xã hội và viện dưỡng lão. Đảm nhiệm vai trò Trưởng ban Vận hành kiêm MC, tôi tổ chức các chuỗi chương trình giao lưu, âm nhạc trị liệu và hoạt động thủ công nhẹ nhàng.

![Chương trình giao lưu nghệ thuật và trò chuyện ấm áp cùng các cụ già | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80)

## 2. Liệu pháp mùi hương & Hoạt động thủ công di sản
Tôi đã thiết kế các buổi trải nghiệm làm túi thơm thảo mộc tự nhiên từ hoa hồi, quế, thảo quả — ứng dụng kiến thức hóa học về tinh dầu để mang lại giấc ngủ ngon và cảm giác thư giãn cho các cụ ông, cụ bà.

> "Lắng nghe những câu chuyện đời của các thế hệ đi trước giúp tôi nhận ra rằng sự gắn kết giữa con người là điều quý giá nhất."

> 💡 **Điểm nhấn 1 phút:** Mang lại niềm vui, sự sẻ chia ấm áp và năng lượng tích cực cho hàng trăm cụ già tại các viện dưỡng lão trên địa bàn Hà Nội.`,
    title: 'Head of Operations & MC, Duong Tam Project (Nov 2024 - Present)',
    subtitle: 'Fostering emotional well-being for elderly nursing home residents',
    roleOrOrganization: 'Head of Operations & Event Host',
    dateRange: 'Nov 2024 - Present',
    location: 'Hanoi, Vietnam',
    summary: 'Led logistics and hosted interactive wellness events for elderly residents in Hanoi care homes.',
    content: `**Duong Tam Project:** Supporting the emotional and mental well-being of elderly citizens.`,
    images: [
      {
        id: 'img-eca-dt-1',
        url: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hosting emotional connection and music therapy sessions at an elderly care home in Hanoi.',
        isMain: true
      }
    ],
    tagsEn: ['DuongTamProject', 'ElderlyCare', 'MentalHealth', 'OperationsHead', 'MC'],
    tagsVi: ['DuAnDuongTam', 'ChamSocNguoiGia', 'SucKhoeTinhThan', 'TruongBanVanHanh', 'MC'],
    tags: ['DuongTamProject', 'ElderlyCare', 'MentalHealth', 'OperationsHead', 'MC'],
    impactMetricsEn: [
      { label: "Role", value: "Head of Ops & MC" },
      { label: "Seniors Supported", value: "[To be updated]" },
      { label: "Care Centers", value: "[To be updated]" },
      { label: "Focus", value: "Elderly Mental Health Care" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Trưởng ban Vận hành & MC" },
      { label: "Người cao tuổi hỗ trợ", value: "[Bổ sung sau]" },
      { label: "Viện dưỡng lão", value: "[Bổ sung sau]" },
      { label: "Mục tiêu", value: "Chăm sóc Tinh thần Người cao tuổi" }
    ],
    impactMetrics: [
      { label: "Role", value: "Head of Ops & MC" },
      { label: "Seniors Supported", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 2,
    createdDate: '2024-11-10'
  },
  {
    id: 'eca-tiktok-craft-villages',
    section: 'activities',
    titleEn: 'Co-Founder & Content Creator — TikTok Channel for Traditional Craft Village Conservation (Aug 2024 - Present)',
    titleVi: 'Đồng sáng lập & Sáng tạo nội dung — Kênh TikTok Bảo Tồn Làng Nghề Truyền Thống (08/2024 - Hiện tại)',
    subtitleEn: 'Disseminating heritage craft stories and chemical knowledge to youth through engaging short-form video storytelling',
    subtitleVi: 'Lan tỏa nét đẹp di sản làng nghề và kiến thức hóa học ứng dụng tới giới trẻ qua video ngắn trực quan',
    roleOrOrganizationEn: 'Co-Founder & Content Creator / Heritage TikTok Channel',
    roleOrOrganizationVi: 'Đồng sáng lập & Sáng tạo nội dung / Kênh TikTok Làng Nghề',
    dateRangeEn: 'Aug 2024 - Present',
    dateRangeVi: '08/2024 - Hiện tại',
    locationEn: 'Vietnam',
    locationVi: 'Việt Nam',
    summaryEn: 'Co-founded TikTok channel producing educational videos explaining the chemical science behind traditional Vietnamese craft techniques.',
    summaryVi: 'Đồng sáng lập kênh TikTok giáo dục giải mã khoa học hóa học đằng sau các kỹ nghệ chế tác thủ công truyền thống của Việt Nam.',
    contentEn: `## 1. Digital Storytelling on Heritage Craft Chemistry
This dedicated TikTok series was produced to bridge ancient Vietnamese artisan heritage and modern chemical principles through captivating short-form science videos.

![Filming traditional wood-ash ceramic glaze formulation and mineral pigments | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

## 2. Decoding Chemical Reactions in Traditional Crafts
Each video breaks down a specific artisanal phenomenon: *Why does rice-husk ash produce distinctive ceramic glazes? How does indigo fermentation require alkaline calcium hydroxide? What redox reactions cure natural lacquer resin?*

> "When complex science is presented with visual clarity and cultural pride, young audiences develop deep respect for their heritage."

> 💡 **1-Min Takeaway:** Reached a broad youth audience, sparking enthusiasm for heritage preservation and sustainable chemistry practices.`,
    contentVi: `## 1. Sáng tạo nội dung khoa học di sản trên nền tảng số
Kênh TikTok chuyên đề được xây dựng nhằm đưa kiến thức hóa học di sản và câu chuyện làng nghề truyền thống Việt Nam đến gần hơn với giới trẻ thông qua các video ngắn giàu tính thị giác và giải thích khoa học dễ hiểu.

![Ghi hình quá trình pha chế men gốm cổ truyền và phản ứng tạo màu | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

## 2. Khám phá bí ẩn phản ứng hóa học sau từng món đồ thủ công
Mỗi video đi sâu giải mã một hiện tượng cụ thể: *Tại sao tro trấu lại tạo nên nước men gốm độc đáo? Vì sao lá chàm cần lên men trong môi trường kiềm nước vôi để tạo màu xanh? Cơ chế oxy hóa của sơn mài tự nhiên diễn ra như thế nào?*

> "Khi khoa học được giải thích một cách gần gũi và tôn vinh văn hóa cội nguồn, thế hệ trẻ sẽ thêm trân quý giá trị truyền thống dân tộc."

> 💡 **Điểm nhấn 1 phút:** Kênh thu hút đông đảo bạn trẻ theo dõi, tạo nên phong trào tìm hiểu khoa học di sản và bảo vệ môi trường làng nghề.`,
    title: 'Co-Founder & Creator, Traditional Craft Village TikTok Channel',
    subtitle: 'Disseminating heritage craft stories and chemistry through video',
    roleOrOrganization: 'Co-Founder & Content Creator',
    dateRange: 'Aug 2024 - Present',
    location: 'Vietnam',
    summary: 'Produced educational videos explaining the chemistry behind traditional Vietnamese craft techniques.',
    content: `**TikTok Channel:** Promoting traditional craft villages through science and visual storytelling.`,
    images: [
      {
        id: 'img-eca-tt-1',
        url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Filming short-form documentary on the chemistry of traditional lacquer and indigo vats.',
        isMain: true
      }
    ],
    tagsEn: ['TikTokCreator', 'CraftVillages', 'HeritageChemistry', 'ScienceCommunication', 'CoFounder'],
    tagsVi: ['TikTokCreator', 'LangNgheTruyenThong', 'HoaHocDiSan', 'TruyenThongKhoaHoc', 'DongSangLap'],
    tags: ['TikTokCreator', 'CraftVillages', 'HeritageChemistry', 'ScienceCommunication', 'CoFounder'],
    impactMetricsEn: [
      { label: "Role", value: "Co-Founder & Creator" },
      { label: "Video Views", value: "[To be updated]" },
      { label: "Videos Produced", value: "[To be updated]" },
      { label: "Topic", value: "Traditional Craft Chemistry" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Đồng sáng lập & Sáng tạo" },
      { label: "Tổng lượt xem", value: "[Bổ sung sau]" },
      { label: "Số video sản xuất", value: "[Bổ sung sau]" },
      { label: "Chủ đề", value: "Hóa học Di sản Làng nghề" }
    ],
    impactMetrics: [
      { label: "Role", value: "Co-Founder & Creator" },
      { label: "Video Views", value: "[To be updated]" }
    ],
    order: 3,
    createdDate: '2024-08-20'
  },
  {
    id: 'eca-high-school-help-kit',
    section: 'activities',
    titleEn: 'Guest Speaker — High School Help Kit: Unboxing Day 2024 (Jul 2024 - Aug 2024)',
    titleVi: 'Diễn giả Khách mời — High School Help Kit: Sự kiện Unboxing Day 2024 (07/2024 - 08/2024)',
    subtitleEn: 'Shared strategies for Chemistry Olympiad preparation, scientific research methodology, and balanced high school journey',
    subtitleVi: 'Chia sẻ kinh nghiệm ôn thi Học sinh Giỏi Hóa học, phương pháp nghiên cứu khoa học và cân bằng cuộc sống học tập',
    roleOrOrganizationEn: 'Guest Speaker / High School Help Kit',
    roleOrOrganizationVi: 'Diễn giả Khách mời / High School Help Kit',
    dateRangeEn: 'Jul 2024 - Aug 2024',
    dateRangeVi: '07/2024 - 08/2024',
    locationEn: 'Hanoi, Vietnam',
    locationVi: 'Hà Nội, Việt Nam',
    summaryEn: 'Invited as guest speaker for High School Help Kit at Unboxing Day 2024, sharing Chemistry Olympiad strategies and research methods with high school attendees.',
    summaryVi: 'Được mời làm diễn giả tại sự kiện Unboxing Day 2024 của tổ chức High School Help Kit, truyền cảm hứng học tập và phương pháp nghiên cứu cho học sinh THPT.',
    contentEn: `**Organization:** High School Help Kit  
**Event:** Unboxing Day 2024  
**Role:** Guest Speaker (Chemistry & Academic Research Track)

**Session Highlights:**
- Delivered an interactive talk on effective problem-solving heuristics in advanced organic and inorganic chemistry.
- Shared practical guidance on initiating independent scientific research at the high school level and connecting classroom theory with laboratory experiments.
- Mentored younger students on study habits, time management, and extracurricular balance.`,
    contentVi: `**Tổ chức:** High School Help Kit  
**Sự kiện:** Unboxing Day 2024  
**Vai trò:** Diễn giả Khách mời (Phân ban Chuyên Hóa & Nghiên cứu Khoa học)

**Nội dung chia sẻ chính:**
- Thuyết trình và chia sẻ phương pháp tư duy logic khi giải các bài toán Hóa học chuyên sâu vô cơ và hữu cơ.
- Hướng dẫn lộ trình bắt đầu nghiên cứu khoa học ngay từ bậc THPT, cách đọc tài liệu chuyên ngành và kết nối kiến thức trường lớp với phòng thí nghiệm.
- Giải đáp thắc mắc và truyền cảm hứng học tập, quản lý thời gian hiệu quả cho các em học sinh khóa dưới.`,
    title: 'Guest Speaker, High School Help Kit: Unboxing Day 2024',
    subtitle: 'Shared Chemistry Olympiad and research strategies with student community',
    roleOrOrganization: 'Guest Speaker / High School Help Kit',
    dateRange: 'Jul 2024 - Aug 2024',
    location: 'Hanoi, Vietnam',
    summary: 'Guest speaker at Unboxing Day 2024, guiding students in chemistry study methods and research.',
    content: `**High School Help Kit:** Inspiring high school students through peer academic sharing.`,
    images: [
      {
        id: 'img-eca-hshk-1',
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sharing Chemistry Olympiad preparation insights at High School Help Kit Unboxing Day 2024.',
        isMain: true
      }
    ],
    tagsEn: ['HSHK', 'UnboxingDay2024', 'GuestSpeaker', 'ChemistryMentorship', 'StudentCommunity'],
    tagsVi: ['HSHK', 'UnboxingDay2024', 'DienGiaKhachMoi', 'CoVanHoaHoc', 'CongDongHocSinh'],
    tags: ['HSHK', 'UnboxingDay2024', 'GuestSpeaker', 'ChemistryMentorship', 'StudentCommunity'],
    impactMetricsEn: [
      { label: "Role", value: "Guest Speaker" },
      { label: "Audience Reach", value: "[To be updated]" },
      { label: "Event", value: "Unboxing Day 2024" },
      { label: "Topic", value: "Chemistry Olympiad & Research" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Diễn giả Khách mời" },
      { label: "Quy mô học sinh", value: "[Bổ sung sau]" },
      { label: "Sự kiện", value: "Unboxing Day 2024" },
      { label: "Chủ đề", value: "Chuyên Hóa & NCKH" }
    ],
    impactMetrics: [
      { label: "Role", value: "Guest Speaker" },
      { label: "Audience Reach", value: "[To be updated]" }
    ],
    order: 4,
    createdDate: '2024-08-01'
  },
  {
    id: 'eca-amstronomy-club',
    section: 'activities',
    titleEn: 'Human Resources Member — Amstronomy: Hanoi - Amsterdam Astronomy Club (Aug 2024 - Present)',
    titleVi: 'Thành viên Ban Nhân sự — CLB Thiên văn học Amstronomy (08/2024 - Hiện tại)',
    subtitleEn: 'Organized stargazing camps, astrophysics seminars, and club recruitment for Hanoi-Amsterdam astronomy society',
    subtitleVi: 'Điều phối nhân sự, tổ chức sự kiện quan sát thiên văn và các buổi hội thảo khoa học vũ trụ trường Ams',
    roleOrOrganizationEn: 'HR Member / Amstronomy Club',
    roleOrOrganizationVi: 'Thành viên Ban Nhân sự / CLB Amstronomy',
    dateRangeEn: 'Aug 2024 - Present',
    dateRangeVi: '08/2024 - Hiện tại',
    locationEn: 'Hanoi - Amsterdam High School for the Gifted',
    locationVi: 'Trường THPT Chuyên Hà Nội - Amsterdam',
    summaryEn: 'Active member in the Human Resources department of Amstronomy Club, organizing stargazing sessions and scientific workshops.',
    summaryVi: 'Thành viên ban Nhân sự CLB Thiên văn Amstronomy, tổ chức các đêm cắm trại ngắm sao và hội thảo khoa học vật lý thiên văn tại trường Ams.',
    contentEn: `**Club:** Amstronomy (Hanoi - Amsterdam High School for the Gifted Astronomy Society)  
**Role:** Human Resources (HR) Member  
**Duration:** Aug 2024 - Present

**Club Activities:**
- Managed member recruitment, internal team building, and cross-departmental communications for the club.
- Co-organized telescope observation nights and Astro-Chemistry discussions on stellar nucleosynthesis and planetary atmospheric spectroscopy.`,
    contentVi: `**Câu lạc bộ:** Amstronomy (CLB Thiên văn học Trường THPT Chuyên Hà Nội - Amsterdam)  
**Vai trò:** Thành viên Ban Nhân sự (HR Department)  
**Thời gian:** 08/2024 - Hiện tại

**Hoạt động chính:**
- Tham gia tuyển thành viên, gắn kết nội bộ và điều phối nhân sự trong các sự kiện lớn của câu lạc bộ.
- Đồng tổ chức các đêm quan sát bầu trời qua kính viễn vọng và tọa đàm Hóa học Thiên văn về sự hình thành các nguyên tố trong vũ trụ và quang phổ khí quyển hành tinh.`,
    title: 'HR Member, Amstronomy Club (Aug 2024 - Present)',
    subtitle: 'Hanoi - Amsterdam High School Astronomy Club',
    roleOrOrganization: 'HR Member / Amstronomy',
    dateRange: 'Aug 2024 - Present',
    location: 'Hanoi - Amsterdam High School',
    summary: 'Organized stargazing camps and astronomical workshops at Hanoi-Amsterdam.',
    content: `**Amstronomy:** Hanoi - Amsterdam High School Astronomy Club.`,
    images: [
      {
        id: 'img-eca-ams-1',
        url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
        caption: 'Telescope night observation camp organized by Amstronomy Club at Hanoi - Amsterdam.',
        isMain: true
      }
    ],
    tagsEn: ['Amstronomy', 'HanoiAmsterdam', 'AstronomyClub', 'HRMember', 'STEM'],
    tagsVi: ['Amstronomy', 'ChuyenHaNoiAms', 'CLBThienVan', 'BanNhanSu', 'STEM'],
    tags: ['Amstronomy', 'HanoiAmsterdam', 'AstronomyClub', 'HRMember', 'STEM'],
    impactMetricsEn: [
      { label: "Role", value: "HR Member" },
      { label: "Club Members", value: "[To be updated]" },
      { label: "Events Hosted", value: "[To be updated]" },
      { label: "School", value: "Hanoi - Amsterdam" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Thành viên Ban Nhân sự" },
      { label: "Số thành viên", value: "[Bổ sung sau]" },
      { label: "Sự kiện tổ chức", value: "[Bổ sung sau]" },
      { label: "Trường", value: "THPT Chuyên Hà Nội - Amsterdam" }
    ],
    impactMetrics: [
      { label: "Role", value: "HR Member" },
      { label: "Club Members", value: "[To be updated]" }
    ],
    order: 5,
    createdDate: '2024-08-25'
  },

  // ==========================================
  // --- 6. VOLUNTEER & COMMUNITY SERVICE (4 Hoạt động tình nguyện) ---
  // ==========================================
  {
    id: 'vol-care-initiative',
    section: 'volunteer',
    titleEn: 'Member — C.A.R.E Community Initiative (Nov 2024)',
    titleVi: 'Thành viên — Sáng kiến Cộng đồng C.A.R.E (11/2024)',
    subtitleEn: 'Launched by Vietnamese Student Associations in Vietnam and Singapore, engaging members nationwide',
    subtitleVi: 'Khởi xướng bởi Hội Sinh viên Việt Nam tại Việt Nam và Singapore, kết nối tình nguyện viên toàn quốc',
    roleOrOrganizationEn: 'Member & Volunteer / C.A.R.E Initiative',
    roleOrOrganizationVi: 'Thành viên & Tình nguyện viên / Dự án C.A.R.E',
    dateRangeEn: 'Nov 2024',
    dateRangeVi: '11/2024',
    locationEn: 'Vietnam & Singapore',
    locationVi: 'Việt Nam & Singapore',
    summaryEn: 'Participated in the C.A.R.E community initiative co-founded by Vietnamese Student Associations in VN and Singapore, mobilizing aid for vulnerable families.',
    summaryVi: 'Tham gia sáng kiến tình nguyện cộng đồng C.A.R.E do Hội Sinh viên Việt Nam tại Singapore và Việt Nam khởi xướng, quyên góp nhu yếu phẩm hỗ trợ người có hoàn cảnh khó khăn.',
    contentEn: `**Initiative:** C.A.R.E Community Service Project  
**Organizers:** Vietnamese Student Associations in Vietnam & Singapore  
**Timeline:** November 2024

**Specific Activities:**
- Joined a cross-border youth charity effort providing immediate relief supplies to underserved communities.
- Mobilized donations of educational stationery, warm clothing, and essential food items, packing and directly delivering care packages.`,
    contentVi: `**Chương trình:** Sáng kiến Tình nguyện Cộng đồng C.A.R.E  
**Đơn vị khởi xướng:** Mạng lưới Hội Sinh viên Việt Nam tại Việt Nam & Singapore  
**Thời gian:** Tháng 11/2024

**Hoạt động cụ thể:**
- Tham gia chiến dịch phục vụ cộng đồng quy mô toàn quốc nhằm hỗ trợ các cá nhân và gia đình có hoàn cảnh kém may mắn.
- Tích cực đóng góp và vận động quyên góp cả về hiện vật (sách vở, quần áo ấm, nhu yếu phẩm) và tài chính để trao tận tay các đối tượng yếu thế.`,
    title: 'Member — C.A.R.E Community Initiative (Nov 2024)',
    subtitle: 'Launched by Vietnamese Student Associations in VN & Singapore',
    roleOrOrganization: 'Member & Volunteer / C.A.R.E',
    dateRange: 'Nov 2024',
    location: 'Vietnam & Singapore',
    summary: 'Community volunteering with VN-Singapore Student Associations for families in need.',
    content: `**C.A.R.E Project:** Community initiative supporting underprivileged families.`,
    images: [
      {
        id: 'img-vol-care-1',
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Packing and delivering essential relief supplies with the C.A.R.E volunteer team.',
        isMain: true
      }
    ],
    tagsEn: ['CAREProject', 'Volunteer', 'StudentUnion', 'VietnamSingapore', 'CommunitySupport'],
    tagsVi: ['DuAnCARE', 'TinhNguyen', 'HoiSinhVien', 'VietNamSingapore', 'ViCongDong'],
    tags: ['CAREProject', 'Volunteer', 'StudentUnion', 'VietnamSingapore', 'CommunitySupport'],
    impactMetricsEn: [
      { label: "Role", value: "Volunteer Member" },
      { label: "Participants", value: "[To be updated]" },
      { label: "Network", value: "VN - Singapore SV" },
      { label: "Timeline", value: "Nov 2024" }
    ],
    impactMetricsVi: [
      { label: "Vai trò", value: "Thành viên Tình nguyện" },
      { label: "Số người tham gia", value: "[Bổ sung sau]" },
      { label: "Quy mô", value: "Mạng lưới SV VN - Singapore" },
      { label: "Thời gian", value: "Tháng 11/2024" }
    ],
    impactMetrics: [
      { label: "Role", value: "Volunteer Member" },
      { label: "Participants", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2024-11-01'
  },
  {
    id: 'vol-national-children-hospital',
    section: 'volunteer',
    titleEn: 'Community Volunteer & Donor — National Children’s Hospital (Bệnh viện Nhi Trung ương)',
    titleVi: 'Tình nguyện viên & Nhà tài trợ — Bệnh viện Nhi Trung ương (National Children’s Hospital)',
    subtitleEn: 'Supported pediatric patients through fundraising and direct financial aid for a child with congenital hearing impairment',
    subtitleVi: 'Đồng hành cùng bệnh nhi thông qua gây quỹ và tài trợ trực tiếp cho em nhỏ bị suy giảm thính lực bẩm sinh',
    roleOrOrganizationEn: 'Volunteer & Donor / National Children’s Hospital',
    roleOrOrganizationVi: 'Tình nguyện viên & Nhà tài trợ / Bệnh viện Nhi Trung ương',
    dateRangeEn: '2024 - 2025',
    dateRangeVi: '2024 - 2025',
    locationEn: 'National Children’s Hospital, Hanoi',
    locationVi: 'Bệnh viện Nhi Trung ương, Hà Nội',
    summaryEn: 'Supported pediatric patients at the National Children’s Hospital through community fundraising and direct medical sponsorship for a hearing-impaired child.',
    summaryVi: 'Đồng hành cùng bệnh nhi tại Bệnh viện Nhi Trung ương thông qua gây quỹ cộng đồng và tài trợ hỗ trợ chi phí điều trị cho một em nhỏ bị suy giảm thính lực bẩm sinh.',
    contentEn: `**Beneficiary:** National Children's Hospital, Hanoi, Vietnam.

**Key Contributions:**
- Participated in charity and moral support activities for children undergoing long-term medical treatments in inpatient wards.
- Contributed direct funds to support a vulnerable pediatric patient diagnosed with congenital profound hearing impairment to receive essential medical interventions and cochlear implant rehabilitation.`,
    contentVi: `**Đơn vị thụ hưởng:** Bệnh viện Nhi Trung ương, Hà Nội.

**Các hoạt động thực hiện:**
- Tham gia các hoạt động thiện nguyện, gây quỹ và hỗ trợ tinh thần cho các bệnh nhi đang điều trị nội trú dài ngày.
- Đóng góp trực tiếp kinh phí hỗ trợ một bệnh nhi có hoàn cảnh khó khăn mắc chứng khiếm thính bẩm sinh được can thiệp y tế và phẫu thuật cấy ốc tai điện tử.`,
    title: 'Volunteer & Donor — National Children’s Hospital',
    subtitle: 'Supported pediatric patients and funded aid for hearing-impaired child',
    roleOrOrganization: 'Volunteer & Donor',
    dateRange: '2024 - 2025',
    location: 'Hanoi, Vietnam',
    summary: 'Aided pediatric hospital patients and directly sponsored a child with congenital hearing impairment.',
    content: `**National Children’s Hospital:** Volunteer and direct medical sponsorship.`,
    images: [
      {
        id: 'img-vol-nch-1',
        url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
        caption: 'Giving gifts and organizing cheerful activities for young patients at National Children’s Hospital.',
        isMain: true
      }
    ],
    tagsEn: ['NationalChildrensHospital', 'PediatricCare', 'HearingImpairmentAid', 'Volunteer'],
    tagsVi: ['BenhVienNhiTrungUong', 'ChamSocBenhNhi', 'HoTroKhiemThinh', 'ThienNguyen'],
    tags: ['NationalChildrensHospital', 'PediatricCare', 'HearingImpairmentAid', 'Volunteer'],
    impactMetricsEn: [
      { label: "Activity", value: "Fundraising & Aid" },
      { label: "Funds Raised", value: "[To be updated]" },
      { label: "Special Case", value: "Hearing Impairment Support" }
    ],
    impactMetricsVi: [
      { label: "Hoạt động", value: "Gây quỹ & Trợ cấp y tế" },
      { label: "Kinh phí gây quỹ", value: "[Bổ sung sau]" },
      { label: "Trường hợp đặc biệt", value: "Bệnh nhi khiếm thính bẩm sinh" }
    ],
    impactMetrics: [
      { label: "Activity", value: "Fundraising & Aid" },
      { label: "Funds Raised", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 2,
    createdDate: '2025-02-15'
  },
  {
    id: 'vol-warm-winter-2025',
    section: 'volunteer',
    titleEn: 'Volunteer — Warm Winter 2025 Volunteer Program (Chiến dịch Đông Ấm 2025)',
    titleVi: 'Tình nguyện viên — Chiến dịch Tình nguyện Đông Ấm 2025 (Warm Winter 2025)',
    subtitleEn: 'Organized by the Youth Union of University of Medicine and Pharmacy, Vietnam National University, Hanoi in Lao Chai, Tuyen Quang',
    subtitleVi: 'Tổ chức bởi Đoàn trường Đại học Y Dược - Đại học Quốc gia Hà Nội tại Xã Lao Chải, Tỉnh Tuyên Quang',
    roleOrOrganizationEn: 'Volunteer / VNU University of Medicine and Pharmacy Youth Union',
    roleOrOrganizationVi: 'Tình nguyện viên / Đoàn TNCS ĐH Y Dược - ĐHQGHN',
    dateRangeEn: 'Jan 2025',
    dateRangeVi: '01/2025',
    locationEn: 'Lao Chai Commune, Tuyen Quang Province, Vietnam',
    locationVi: 'Xã Lao Chải, Tỉnh Tuyên Quang, Việt Nam',
    summaryEn: 'Traveled to remote mountainous Lao Chai commune (Tuyen Quang) with VNU medical volunteers to deliver warm clothing, medical supplies, and aid to ethnic minority families.',
    summaryVi: 'Tham gia các hoạt động vì cộng đồng tại xã vùng cao Lao Chải (tỉnh Tuyên Quang) do Đoàn trường ĐH Y Dược - ĐHQGHN tổ chức, hỗ trợ đời sống cho bà con dân tộc thiểu số.',
    contentEn: `## 1. Warm Winter Relief Campaign in Highland Tuyen Quang
The Warm Winter 2025 humanitarian campaign reached Lao Chai commune—one of the most remote mountainous areas in Tuyen Quang province facing harsh winter frost.

![Distributing winter coats, warm blankets, and educational kits to students | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80)

## 2. Fundraising, Logistical Delivery & Fun STEM Demos
I actively engaged in community fundraising, sorting and packing winter kits containing insulated coats, warm quilts, school supplies, and food staples. At local schools, I demonstrated engaging chemistry experiments (natural pH indicators with red cabbage juice), bringing joy to young learners.

> "Seeing children’s eyes light up during their first chemistry demonstration made every kilometer traveled worthwhile."

> 💡 **1-Min Takeaway:** Delivered essential cold-weather relief while sparking scientific curiosity in remote mountainous classrooms.`,
    contentVi: `## 1. Hành trình Đông Ấm vùng cao Tuyên Quang
Chiến dịch Đông Ấm 2025 đưa đoàn tình nguyện đến với xã Lao Chải — một trong những địa bàn vùng cao xa xôi và điều kiện sinh hoạt khó khăn nhất của tỉnh Tuyên Quang.

![Trao tặng áo ấm, chăn bông và nhu yếu phẩm cho các em nhỏ vùng cao | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80)

## 2. Gây quỹ, chuẩn bị quà tặng và tổ chức hoạt động STEM
Cùng các tình nguyện viên, tôi tham gia trực tiếp vào khâu vận động gây quỹ, đóng gói hàng trăm suất quà gồm áo ấm, chăn bông, đồ dùng học tập và nhu yếu phẩm. Tại điểm trường, chúng tôi tổ chức các góc thí nghiệm khoa học vui (đổi màu chất chỉ thị từ bắp cải tím, làm kem tuyết không lạnh) mang lại tiếng cười rạng rỡ cho các em nhỏ.

> "Nụ cười của các em học sinh vùng cao khi lần đầu được chứng kiến phản ứng hóa học đổi màu kỳ diệu là động lực lớn nhất của chuyến đi."

> 💡 **Điểm nhấn 1 phút:** Mang hơi ấm tình thương và gieo mầm đam mê khám phá khoa học tới những điểm trường xa xôi nhất.`,
    title: 'Volunteer — Warm Winter 2025 in Lao Chai, Tuyen Quang',
    subtitle: 'Organized by VNU University of Medicine and Pharmacy Youth Union',
    roleOrOrganization: 'Volunteer / VNU Youth Union',
    dateRange: 'Jan 2025',
    location: 'Tuyen Quang, Vietnam',
    summary: 'Delivered warm clothing, books, and medical aid to highland children in Lao Chai, Tuyen Quang.',
    content: `**Warm Winter 2025:** Community outreach in Lao Chai Commune, Tuyen Quang Province.`,
    images: [
      {
        id: 'img-vol-winter-1',
        url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
        caption: 'Distributing warm winter clothing and school supplies to pupils in Lao Chai commune, Tuyen Quang.',
        isMain: true
      }
    ],
    tagsEn: ['WarmWinter2025', 'DongAm2025', 'TuyenQuang', 'LaoChai', 'VNUYDuoc'],
    tagsVi: ['DongAm2025', 'TuyenQuang', 'LaoChai', 'DHYDuocDHQGHN', 'ThienNguyenVungCao'],
    tags: ['WarmWinter2025', 'DongAm2025', 'TuyenQuang', 'LaoChai', 'VNUYDuoc'],
    impactMetricsEn: [
      { label: "Campaign", value: "Warm Winter 2025" },
      { label: "Gift Packages", value: "[To be updated]" },
      { label: "Families Supported", value: "[To be updated]" },
      { label: "Location", value: "Lao Chai, Tuyen Quang" }
    ],
    impactMetricsVi: [
      { label: "Chương trình", value: "Đông Ấm 2025" },
      { label: "Suất quà trao tặng", value: "[Bổ sung sau]" },
      { label: "Hộ gia đình hỗ trợ", value: "[Bổ sung sau]" },
      { label: "Địa bàn", value: "Xã Lao Chải, Tuyên Quang" }
    ],
    impactMetrics: [
      { label: "Campaign", value: "Warm Winter 2025" },
      { label: "Gift Packages", value: "[To be updated]" }
    ],
    order: 3,
    createdDate: '2025-01-20'
  },
  {
    id: 'vol-sos-hai-phong',
    section: 'volunteer',
    titleEn: 'Volunteer — SOS Children’s Village Hai Phong (Làng Trẻ em SOS Hải Phòng)',
    titleVi: 'Tình nguyện viên — Làng Trẻ em SOS Hải Phòng (SOS Children’s Village Hai Phong)',
    subtitleEn: 'Community service program supporting children in need through interactive science and education (May 2026)',
    subtitleVi: 'Chương trình tình nguyện hỗ trợ giáo dục STEM và sinh hoạt đời sống cho trẻ em có hoàn cảnh đặc biệt (05/2026)',
    roleOrOrganizationEn: 'Volunteer / SOS Children’s Village Hai Phong',
    roleOrOrganizationVi: 'Tình nguyện viên / Làng Trẻ em SOS Hải Phòng',
    dateRangeEn: 'May 2026',
    dateRangeVi: '05/2026',
    locationEn: 'Hai Phong, Vietnam',
    locationVi: 'Hải Phòng, Việt Nam',
    summaryEn: 'Volunteered at SOS Children’s Village Hai Phong in May 2026, facilitating fun science experiments and life skills workshops for kids.',
    summaryVi: 'Tham gia các hoạt động tình nguyện tại Làng Trẻ em SOS Hải Phòng vào tháng 5/2026, đóng góp vào các sáng kiến hỗ trợ giáo dục STEM và sinh hoạt đời sống cho trẻ em.',
    contentEn: `**Location:** SOS Children's Village Hai Phong  
**Timeline:** May 2026

**Volunteer Program:**
- Facilitated hands-on fun STEM experiments and interactive mentoring sessions for children residing in SOS foster homes.
- Contributed to recreational and life skill activities, encouraging academic enthusiasm and confidence in orphaned and vulnerable youth.`,
    contentVi: `**Thời gian:** Tháng 5/2026  
**Địa điểm:** Làng Trẻ em SOS Hải Phòng  

**Nội dung hoạt động:**
- Tổ chức các buổi học kỹ năng sống, thí nghiệm khoa học vui và hướng dẫn học tập cho các em nhỏ tại các gia đình SOS.
- Đóng góp vào các sáng kiến hỗ trợ đời sống, tạo không gian vui chơi lành mạnh và tiếp thêm động lực học tập cho trẻ em có hoàn cảnh đặc biệt.`,
    title: 'Volunteer — SOS Children’s Village Hai Phong (May 2026)',
    subtitle: 'Community service program supporting children in need',
    roleOrOrganization: 'Volunteer / SOS Children’s Village',
    dateRange: 'May 2026',
    location: 'Hai Phong, Vietnam',
    summary: 'STEM workshops and life skills mentoring for children at SOS Village Hai Phong.',
    content: `**SOS Children’s Village:** Supporting vulnerable children through education and care.`,
    images: [
      {
        id: 'img-vol-sos-1',
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Engaging in science and learning games with children at SOS Children’s Village Hai Phong.',
        isMain: true
      }
    ],
    tagsEn: ['SOSChildrenVillage', 'HaiPhong', 'CommunitySupport', 'STEMOutreach', 'Volunteer'],
    tagsVi: ['LangTreSOS', 'HaiPhong', 'HoTroCongDong', 'GiaoDucSTEM', 'TinhNguyen'],
    tags: ['SOSChildrenVillage', 'HaiPhong', 'CommunitySupport', 'STEMOutreach', 'Volunteer'],
    impactMetricsEn: [
      { label: "Location", value: "SOS Village Hai Phong" },
      { label: "Children Mentored", value: "[To be updated]" },
      { label: "STEM Workshops", value: "[To be updated]" },
      { label: "Timeline", value: "May 2026" }
    ],
    impactMetricsVi: [
      { label: "Địa điểm", value: "Làng Trẻ SOS Hải Phòng" },
      { label: "Số trẻ em hỗ trợ", value: "[Bổ sung sau]" },
      { label: "Số buổi STEM", value: "[Bổ sung sau]" },
      { label: "Thời gian", value: "Tháng 5/2026" }
    ],
    impactMetrics: [
      { label: "Location", value: "SOS Village Hai Phong" },
      { label: "Children Mentored", value: "[To be updated]" }
    ],
    order: 4,
    createdDate: '2026-05-20'
  },

  // ==========================================
  // --- 7. WORK EXPERIENCE & INTERNSHIPS (2 Vị trí công việc) ---
  // ==========================================
  {
    id: 'exp-lam-thao-chemicals',
    section: 'experience',
    titleEn: 'Technical Intern — Lam Thao Fertilizers and Chemicals Joint Stock Company (2025 - 2026)',
    titleVi: 'Thực tập sinh Kỹ thuật — Công ty Cổ phần Supe Phốt phát và Hóa chất Lâm Thao (2025 - 2026)',
    subtitleEn: 'Studied & documented industrial environmental systems, chemical safety protocols & plant manufacturing operations',
    subtitleVi: 'Nghiên cứu & khảo sát hệ thống xử lý môi trường công nghiệp, quy trình an toàn hóa chất & vận hành sản xuất',
    roleOrOrganizationEn: 'Technical Intern / Lam Thao Fertilizers and Chemicals JSC',
    roleOrOrganizationVi: 'Thực tập sinh Kỹ thuật / Công ty CP Supe Phốt phát & Hóa chất Lâm Thao',
    dateRangeEn: '2025 - 2026',
    dateRangeVi: '2025 - 2026',
    locationEn: 'Phu Tho Province, Vietnam',
    locationVi: 'Phú Thọ, Việt Nam',
    summaryEn: 'Completed technical internship at Lam Thao Fertilizers and Chemicals JSC: studied industrial environmental systems, chemical safety protocols, QC analysis, and experimental fertilizer testing.',
    summaryVi: 'Thực tập sinh kỹ thuật tại Công ty CP Supe Phốt phát & Hóa chất Lâm Thao: nghiên cứu hệ thống môi trường công nghiệp, an toàn hóa chất, kiểm soát chất lượng (QC) và thử nghiệm phân tích công thức phân bón.',
    contentEn: `## 1. Technical Internship at Lam Thao Fertilizers & Chemicals
Interning at Lam Thao Fertilizers & Chemicals JSC—Vietnam’s premier industrial chemical and fertilizer manufacturing complex—provided direct immersion into large-scale chemical engineering workflows.

![Visiting the Sulfuric Acid catalytic plant and industrial quality control lab | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80)

## 2. Industrial Quality Control (QC) & Process Safety Standards
I observed the double-contact double-absorption process in the Sulfuric Acid ($H_2SO_4$) synthesis unit, scrubbers, and industrial wastewater treatment plant. In the Quality Assurance lab, I performed quantitative titrations of raw apatite ore and effective $P_2O_5$ assays.

> "Witnessing textbook chemical reactions operating at an industrial scale of thousands of tons daily cemented my passion for Chemical Engineering."

> 💡 **1-Min Takeaway:** Gained practical insights into mass balancing, industrial process safety, catalytic bed monitoring, and ISO quality management.`,
    contentVi: `## 1. Thực tập kỹ thuật tại Công ty CP Supe Phốt phát & Hóa chất Lâm Thao
Kỳ thực tập kỹ thuật tại Công ty CP Supe Phốt phát & Hóa chất Lâm Thao — doanh nghiệp sản xuất phân bón và hóa chất công nghiệp hàng đầu Việt Nam — đã cho tôi trải nghiệm quý báu về quy trình sản xuất hóa chất quy mô công nghiệp.

![Tham quan phân xưởng sản xuất Axit Sunfuric và hệ thống kiểm soát chất lượng | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80)

## 2. Kiểm soát chất lượng (QC) & Quy trình An toàn Công nghiệp
Tôi được tiếp cận trực tiếp dây chuyền sản xuất Axit Sunfuric ($H_2SO_4$) bằng phương pháp tiếp xúc kép, quan sát tháp hấp thụ SO₃ và tìm hiểu hệ thống xử lý khí thải đạt chuẩn môi trường. Tại phòng thí nghiệm KCS, tôi tham gia chuẩn độ định lượng mẫu quặng apatit và phân tích hàm lượng $P_2O_5$ hữu hiệu.

> "Nhìn thấy các phản ứng hóa học trong sách giáo khoa được vận hành ở quy mô hàng nghìn tấn mỗi ngày giúp tôi hiểu sâu sắc về kỹ thuật hóa học công nghiệp."

> 💡 **Điểm nhấn 1 phút:** Tích lũy kiến thức thực tế về cân bằng vật chất, an toàn hóa chất công nghiệp và kiểm soát chất lượng chuẩn ISO.`,
    title: 'Technical Intern — Lam Thao Fertilizers and Chemicals JSC',
    subtitle: 'Studied industrial environmental systems & chemical safety protocols',
    roleOrOrganization: 'Technical Intern / Lam Thao Chemicals',
    dateRange: '2025 - 2026',
    location: 'Phu Tho, Vietnam',
    summary: 'Technical intern studying industrial safety, QC testing, and environmental treatment at chemical plant.',
    content: `**Lam Thao Fertilizers and Chemicals JSC:** Technical internship in industrial chemical processes.`,
    images: [
      {
        id: 'img-exp-lt-1',
        url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Surveying industrial safety and emissions control systems at Lam Thao chemical plant.',
        isMain: true
      }
    ],
    tagsEn: ['LamThaoChemicals', 'TechnicalIntern', 'IndustrialChemistry', 'QualityControl', 'ChemicalSafety'],
    tagsVi: ['SupeLamThao', 'ThucTapKyThuat', 'HoaHocCongNghiep', 'KiemSoatChatLuong', 'AnToanHoaChat'],
    tags: ['LamThaoChemicals', 'TechnicalIntern', 'IndustrialChemistry', 'QualityControl', 'ChemicalSafety'],
    impactMetricsEn: [
      { label: "Role", value: "Technical Intern" },
      { label: "Hours Completed", value: "[To be updated]" },
      { label: "Company", value: "Lam Thao Chemicals" },
      { label: "Domain", value: "QC & Industrial Safety" }
    ],
    impactMetricsVi: [
      { label: "Vị trí", value: "Thực tập sinh Kỹ thuật" },
      { label: "Số giờ thực tập", value: "[Bổ sung sau]" },
      { label: "Đơn vị", value: "CP Supe Lâm Thao" },
      { label: "Chuyên môn", value: "QC & An toàn Hóa chất" }
    ],
    impactMetrics: [
      { label: "Role", value: "Technical Intern" },
      { label: "Hours Completed", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 1,
    createdDate: '2025-08-01'
  },
  {
    id: 'exp-hust-lab-assistant',
    section: 'experience',
    titleEn: 'Lab Assistant — Chemistry Department, Hanoi University of Science and Technology (HUST) (2025 - 2026)',
    titleVi: 'Trợ lý Phòng Thí nghiệm — Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST) (2025 - 2026)',
    subtitleEn: 'Conducted photocatalytic degradation experiments on methylene blue under UV irradiation using a ZnO/g-C₃N₄ nanocomposite and evaluated performance',
    subtitleVi: 'Tiến hành thực nghiệm phân hủy quang xúc tác Methylene Blue dưới tia UV bằng nanocomposite ZnO/g-C₃N₄ và đánh giá động học',
    roleOrOrganizationEn: 'Lab Assistant / Chemistry Dept, HUST',
    roleOrOrganizationVi: 'Trợ lý Phòng Thí nghiệm / Khoa Hóa học, ĐH Bách khoa Hà Nội (HUST)',
    dateRangeEn: '2025 - 2026',
    dateRangeVi: '2025 - 2026',
    locationEn: 'Hanoi University of Science and Technology (HUST)',
    locationVi: 'Trường Đại học Bách khoa Hà Nội (HUST)',
    summaryEn: 'Lab assistant at HUST Chemistry Department: conducted photocatalytic degradation assays on Methylene Blue with ZnO/g-C3N4 nanocomposites and calculated reaction kinetics.',
    summaryVi: 'Trợ lý phòng thí nghiệm tại Khoa Hóa học HUST: tiến hành thực nghiệm phân hủy quang xúc tác Methylene Blue dưới bức xạ UV bằng nanocomposite ZnO/g-C3N4 và phân tích dữ liệu động học phản ứng.',
    contentEn: `## 1. Laboratory Research Assistant at HUST Chemistry Dept
Serving as a Lab Assistant at the Department of Chemistry, Hanoi University of Science and Technology (HUST), I assisted senior researchers in nanomaterial synthesis and environmental photocatalysis.

![Conducting hydrothermal synthesis of nanocomposites in HUST chemistry lab | Photo: Ton Duc Minh](https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80)

## 2. Analytical Instrumentation & Research Rigor
My responsibilities included preparing precursor solutions, operating high-pressure hydrothermal autoclaves, high-speed centrifugation, and conducting UV-Vis spectrophotometric dye degradation kinetic assays.

> "Scientific integrity, meticulous experimental record-keeping, and strict lab safety standards were the most valuable disciplines instilled in me."

> 💡 **1-Min Takeaway:** Mastered wet-chemical synthesis protocols, spectroscopic kinetics data processing, and collaborative laboratory workflows.`,
    contentVi: `## 1. Trợ lý nghiên cứu tại Phòng Lab Hóa học HUST
Đảm nhiệm vai trò Trợ lý Lab tại Khoa Hóa học, Trường Đại học Bách khoa Hà Nội (HUST), tôi tham gia hỗ trợ các nghiên cứu tổng hợp vật liệu nano tiên tiến và xúc tác quang môi trường.

![Thực hiện tổng hợp thủy nhiệt vật liệu nano tại phòng thí nghiệm HUST | Ảnh: Tôn Đức Minh](https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80)

## 2. Vận hành thiết bị phân tích & Kỷ luật phòng thí nghiệm
Nhiệm vụ hàng ngày gồm chuẩn bị dung dịch hóa chất tinh khiết, vận hành lò nung thủy nhiệt áp suất cao, ly tâm rửa mẫu và đo quang phổ UV-Vis ghi nhận đường cong suy giảm nồng độ chất màu theo thời gian phản ứng.

> "Sự tỉ mỉ, tuân thủ tuyệt đối quy trình an toàn và tính trung thực trong ghi chép dữ liệu là những bài học nghiên cứu quý giá nhất tôi học được tại đây."

> 💡 **Điểm nhấn 1 phút:** Làm chủ kỹ thuật tổng hợp hóa học ướt, xử lý số liệu động học và kỹ năng làm việc trong môi trường nghiên cứu học thuật chuyên nghiệp.`,
    title: 'Lab Assistant — Chemistry Dept, HUST (2025 - 2026)',
    subtitle: 'Photocatalytic degradation and reaction kinetics research',
    roleOrOrganization: 'Lab Assistant / HUST Chemistry',
    dateRange: '2025 - 2026',
    location: 'HUST, Hanoi',
    summary: 'Lab assistant at HUST conducting photocatalytic degradation tests on ZnO/g-C3N4.',
    content: `**HUST Chemistry Department:** Laboratory Assistant in nanomaterials photocatalysis.`,
    images: [
      {
        id: 'img-exp-hust-1',
        url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Operating UV-Vis spectroscopy instruments and analyzing kinetic degradation data in HUST laboratory.',
        isMain: true
      }
    ],
    tagsEn: ['LabAssistant', 'HUST', 'Photocatalysis', 'ReactionKinetics', 'ZnO_gC3N4'],
    tagsVi: ['TroLyPhongLab', 'HUST', 'QuangXucTac', 'DongHocPhanUng', 'ZnO_gC3N4'],
    tags: ['LabAssistant', 'HUST', 'Photocatalysis', 'ReactionKinetics', 'ZnO_gC3N4'],
    impactMetricsEn: [
      { label: "Role", value: "Lab Assistant" },
      { label: "Assays Completed", value: "[To be updated]" },
      { label: "Lab", value: "HUST Chemistry Dept" },
      { label: "Material", value: "ZnO/g-C₃N₄ Nanocomposite" }
    ],
    impactMetricsVi: [
      { label: "Vị trí", value: "Trợ lý Lab" },
      { label: "Số mẫu thí nghiệm", value: "[Bổ sung sau]" },
      { label: "Phòng Lab", value: "Khoa Hóa học HUST" },
      { label: "Vật liệu NC", value: "ZnO/g-C₃N₄ Nanocomposite" }
    ],
    impactMetrics: [
      { label: "Role", value: "Lab Assistant" },
      { label: "Assays Completed", value: "[To be updated]" }
    ],
    isHighlighted: true,
    order: 2,
    createdDate: '2025-10-01'
  }
];

export const initial3DMolecules: Molecule3DData[] = [
  {
    id: 'benzene',
    name: 'Benzene (Benzen)',
    formula: 'C₆H₆',
    weight: '78.11 g/mol',
    description: 'A planar aromatic hydrocarbon with a delocalized pi-electron cloud, fundamental in organic synthesis and polymer chemistry.',
    relevanceToMinh: 'Serves as the aromatic core in Polyaniline (PANI) conjugated conductive polymers and organic dyes investigated in Minh’s HAP/PANI and photocatalytic degradation research.',
    atoms: [
      { element: 'C', x: 0, y: 1.4, z: 0 },
      { element: 'C', x: 1.21, y: 0.7, z: 0 },
      { element: 'C', x: 1.21, y: -0.7, z: 0 },
      { element: 'C', x: 0, y: -1.4, z: 0 },
      { element: 'C', x: -1.21, y: -0.7, z: 0 },
      { element: 'C', x: -1.21, y: 0.7, z: 0 },
      { element: 'H', x: 0, y: 2.48, z: 0 },
      { element: 'H', x: 2.15, y: 1.24, z: 0 },
      { element: 'H', x: 2.15, y: -1.24, z: 0 },
      { element: 'H', x: 0, y: -2.48, z: 0 },
      { element: 'H', x: -2.15, y: -1.24, z: 0 },
      { element: 'H', x: -2.15, y: 1.24, z: 0 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 1, to: 2, order: 1 },
      { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 },
      { from: 4, to: 5, order: 2 },
      { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 },
      { from: 1, to: 7, order: 1 },
      { from: 2, to: 8, order: 1 },
      { from: 3, to: 9, order: 1 },
      { from: 4, to: 10, order: 1 },
      { from: 5, to: 11, order: 1 }
    ]
  },
  {
    id: 'caffeine',
    name: 'Caffeine (Cafein)',
    formula: 'C₈H₁₀N₄O₂',
    weight: '194.19 g/mol',
    description: 'A purine alkaloid with stimulant properties, possessing a bicyclic core consisting of fused pyrimidinedione and imidazole rings.',
    relevanceToMinh: 'Analyzed during secondary high school organic chemistry projects examining alkaloid extraction and UV-Vis spectrophotometric calibration curves.',
    atoms: [
      { element: 'C', x: -0.5, y: 1.2, z: 0 },
      { element: 'N', x: 0.8, y: 1.2, z: 0 },
      { element: 'C', x: 1.5, y: 0.0, z: 0 },
      { element: 'C', x: 0.6, y: -1.1, z: 0 },
      { element: 'C', x: -0.8, y: -0.8, z: 0 },
      { element: 'N', x: -1.2, y: 0.4, z: 0 },
      { element: 'O', x: -1.2, y: 2.2, z: 0 },
      { element: 'O', x: 2.7, y: -0.1, z: 0 },
      { element: 'N', x: 1.0, y: -2.4, z: 0 },
      { element: 'C', x: -0.2, y: -2.8, z: 0 },
      { element: 'N', x: -1.2, y: -1.9, z: 0 },
      { element: 'C', x: 1.5, y: 2.5, z: 0 },
      { element: 'C', x: -2.6, y: 0.7, z: 0 },
      { element: 'C', x: 2.4, y: -2.8, z: 0 }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 1 },
      { from: 2, to: 3, order: 1 },
      { from: 3, to: 4, order: 2 },
      { from: 4, to: 5, order: 1 },
      { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 2 },
      { from: 2, to: 7, order: 2 },
      { from: 3, to: 8, order: 1 },
      { from: 8, to: 9, order: 1 },
      { from: 9, to: 10, order: 2 },
      { from: 10, to: 4, order: 1 },
      { from: 1, to: 11, order: 1 },
      { from: 5, to: 12, order: 1 },
      { from: 8, to: 13, order: 1 }
    ]
  },
  {
    id: 'aspirin',
    name: 'Aspirin (Acetylsalicylic Acid)',
    formula: 'C₉H₈O₄',
    weight: '180.16 g/mol',
    description: 'A classic esterified analgesic derived from salicylic acid, demonstrating esterification synthesis and crystallization purification.',
    relevanceToMinh: 'Synthesized and crystallized in high school advanced laboratory training to study purity verification by iron(III) chloride complexometric colorimetry and melting point analysis.',
    atoms: [
      { element: 'C', x: 0.0, y: 0.0, z: 0.0 },
      { element: 'C', x: 1.4, y: 0.0, z: 0.0 },
      { element: 'C', x: 2.1, y: 1.2, z: 0.0 },
      { element: 'C', x: 1.4, y: 2.4, z: 0.0 },
      { element: 'C', x: 0.0, y: 2.4, z: 0.0 },
      { element: 'C', x: -0.7, y: 1.2, z: 0.0 },
      { element: 'C', x: -0.8, y: -1.2, z: 0.0 },
      { element: 'O', x: -2.0, y: -1.1, z: 0.0 },
      { element: 'O', x: -0.1, y: -2.4, z: 0.0 },
      { element: 'O', x: 2.1, y: -1.2, z: 0.0 },
      { element: 'C', x: 3.5, y: -1.1, z: 0.0 },
      { element: 'O', x: 4.1, y: -0.1, z: 0.0 },
      { element: 'C', x: 4.1, y: -2.4, z: 0.0 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 1, to: 2, order: 1 },
      { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 },
      { from: 4, to: 5, order: 2 },
      { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 },
      { from: 6, to: 7, order: 2 },
      { from: 6, to: 8, order: 1 },
      { from: 1, to: 9, order: 1 },
      { from: 9, to: 10, order: 1 },
      { from: 10, to: 11, order: 2 },
      { from: 10, to: 12, order: 1 }
    ]
  }
];

export const INITIAL_POSTS = initialPortfolioPosts;
export const INITIAL_PROFILE = initialStudentProfile;
