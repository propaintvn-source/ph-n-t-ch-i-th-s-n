
import { Competitor } from './types';

export const COMPETITORS: Competitor[] = [
  {
    id: 'dulux',
    name: 'Dulux (AkzoNobel)',
    origin: 'Hà Lan',
    marketShare: 22,
    segments: ['Sơn trang trí', 'Sơn dự án', 'Sơn công nghiệp'],
    mainProducts: ['Dulux Weathershield', 'Dulux Ambiance', 'Dulux Inspire'],
    pricing: 'Premium',
    marketingStrategy: 'Tập trung vào chất lượng bền bỉ, công nghệ bảo vệ tường và thương hiệu toàn cầu.',
    strengths: ['Thương hiệu mạnh nhất', 'Mạng lưới phân phối rộng', 'Công nghệ màu sắc tiên tiến'],
    weaknesses: ['Giá cao', 'Hàng giả nhiều'],
    logo: 'https://picsum.photos/seed/dulux/200/200',
    description: 'Thương hiệu dẫn đầu thị trường sơn trang trí tại Việt Nam với uy tín lâu đời.'
  },
  {
    id: 'jotun',
    name: 'Jotun',
    origin: 'Na Uy',
    marketShare: 18,
    segments: ['Sơn trang trí', 'Sơn hàng hải', 'Sơn công nghiệp', 'Sơn tĩnh điện'],
    mainProducts: ['Jotashield', 'Majestic', 'Essence'],
    pricing: 'Premium',
    marketingStrategy: 'Cung cấp giải pháp tổng thể "Single Source Solution", tập trung vào độ bền cực hạn.',
    strengths: ['Chuyên gia sơn công nghiệp & hàng hải', 'Độ bền cao', 'Thiết kế bao bì chuyên nghiệp'],
    weaknesses: ['Phân khúc bình dân chưa mạnh'],
    logo: 'https://picsum.photos/seed/jotun/200/200',
    description: 'Đối thủ lớn nhất của Dulux trong phân khúc cao cấp, mạnh mẽ ở cả mảng dân dụng và công nghiệp.'
  },
  {
    id: 'nippon',
    name: 'Nippon Paint',
    origin: 'Nhật Bản',
    marketShare: 15,
    segments: ['Sơn trang trí', 'Sơn ô tô', 'Sơn công nghiệp'],
    mainProducts: ['WeatherGard', 'Odour-less', 'Matex'],
    pricing: 'Mid-range',
    marketingStrategy: 'Thông điệp "Sơn đâu cũng đẹp", tập trung vào tính thân thiện môi trường và sức khỏe.',
    strengths: ['Giá cạnh tranh trong phân khúc khá', 'Mạnh mảng sơn ô tô', 'Sản phẩm không mùi'],
    weaknesses: ['Hình ảnh thương hiệu ít "sang chảnh" hơn Dulux/Jotun'],
    logo: 'https://picsum.photos/seed/nippon/200/200',
    description: 'Thương hiệu Nhật Bản với slogan nổi tiếng, phổ biến với các hộ gia đình Việt.'
  },
  {
    id: 'kova',
    name: 'Kova',
    origin: 'Việt Nam',
    marketShare: 12,
    segments: ['Sơn trang trí', 'Chống thấm', 'Sơn đặc chủng'],
    mainProducts: ['CT-11A Gold', 'K-5500', 'Sơn nano chống cháy'],
    pricing: 'Mid-range',
    marketingStrategy: 'Tập trung vào khoa học công nghệ, chống thấm chuyên sâu phù hợp khí hậu nhiệt đới.',
    strengths: ['Chất lượng chống thấm vượt trội', 'Lợi thế am hiểu khí hậu địa phương', 'Giá hợp lý'],
    weaknesses: ['Hệ thống màu sắc chưa đa dạng bằng đối thủ ngoại'],
    logo: 'https://picsum.photos/seed/kova/200/200',
    description: 'Niềm tự hào sơn Việt, dẫn đầu về công nghệ chống thấm và sơn đặc dụng.'
  },
  {
    id: 'toa',
    name: 'TOA Paint',
    origin: 'Thái Lan',
    marketShare: 10,
    segments: ['Sơn trang trí', 'Hóa chất xây dựng'],
    mainProducts: ['SuperShield', 'TOA 7in1', 'Homecote'],
    pricing: 'Mass',
    marketingStrategy: 'Tập trung vào phân khúc đại chúng, khuyến mãi mạnh cho đại lý.',
    strengths: ['Giá rẻ', 'Chương trình chiết khấu tốt', 'Phủ sóng nông thôn'],
    weaknesses: ['Phân khúc cao cấp chưa được tin dùng cao'],
    logo: 'https://picsum.photos/seed/toa/200/200',
    description: 'Đến từ Thái Lan, TOA chiếm lĩnh thị trường nhờ giá thành và sự hỗ trợ đại lý tốt.'
  },
  {
    id: '4oranges',
    name: '4 Oranges (MyKolor)',
    origin: 'Hợp tác Mỹ - Việt',
    marketShare: 13,
    segments: ['Sơn trang trí'],
    mainProducts: ['MyKolor Grand', 'Spec', 'Expo'],
    pricing: 'Premium',
    marketingStrategy: 'Quảng cáo truyền hình mạnh mẽ, tập trung vào phong cách sống và thời trang màu sắc.',
    strengths: ['Marketing cực mạnh', 'Hơn 1000 màu sắc', 'Hệ thống máy pha màu hiện đại'],
    weaknesses: ['Phụ thuộc nhiều vào quảng cáo'],
    logo: 'https://picsum.photos/seed/mykolor/200/200',
    description: 'Nổi tiếng với các thương hiệu con như MyKolor, Spec, Expo với chiến lược đa nhãn hàng.'
  }
];

export const MARKET_DATA = [
  { name: 'Dulux', value: 22 },
  { name: 'Jotun', value: 18 },
  { name: 'Nippon', value: 15 },
  { name: '4 Oranges', value: 13 },
  { name: 'Kova', value: 12 },
  { name: 'TOA', value: 10 },
  { name: 'Others', value: 10 }
];

export const GROWTH_DATA = [
  { year: '2020', size: 850 },
  { year: '2021', size: 890 },
  { year: '2022', size: 960 },
  { year: '2023', size: 1020 },
  { year: '2024 (Dự báo)', size: 1100 }
];
