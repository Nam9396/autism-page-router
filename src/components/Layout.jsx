

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider'



export function Layout({ children }) {
    let pathname = usePathname()

    const allSections = {
      "/": [],
      "/page1.mdx": [
        {
          "title": "Guides",
          "id": "guides"
        },
        {
          "title": "Resources",
          "id": "resources"
        }
      ],
      "/dau-hieu-som": [
        {
          "title": "Tự kỷ xuất hiện từ lúc nào",
          "id": "tu-ky-xuat-hien-tu-luc-nao"
        },
        {
          "title": "Các dấu hiệu sớm của tự kỷ",
          "id": "cac-dau-hieu-som-cua-tu-ky"
        },
        {
          "title": "Phát hiện sớm trẻ tự kỷ",
          "id": "phat-hien-som-tre-tu-ky"
        }
      ],
      "/chan-doan": [
        {
          "title": "Giới thiệu chung",
          "id": "gioi-thieu-chung"
        },
        {
          "title": "Chẩn đoán diễn ra như thế nào",
          "id": "chan-doan-dien-ra-nhu-the-nao"
        },
        {
          "title": "Những đặc điểm thường gặp",
          "id": "nhung-dac-diem-thuong-gap"
        },
        {
          "title": "Ai là người đưa ra chẩn đoán",
          "id": "ai-la-nguoi-dua-ra-chan-doan"
        },
        {
          "title": "Đội ngũ đánh giá đa ngành là gì",
          "id": "doi-ngu-danh-gia-da-nganh-la-gi"
        },
        {
          "title": "Tự kỷ và suy giảm trí tuệ",
          "id": "tu-ky-va-suy-giam-tri-tue"
        },
        {
          "title": "Những xét nghiệm thường gặp",
          "id": "nhung-xet-nghiem-thuong-gap"
        },
        {
          "title": "Các bệnh khác dễ nhầm lẫn",
          "id": "cac-benh-khac-de-nham-lan"
        }
      ],
      "/cham-soc": [
        {
          "title": "Một số kinh nghiệm chăm sóc",
          "id": "mot-so-kinh-nghiem-cham-soc"
        },
        {
          "title": "Đưa trẻ ra bên ngoài",
          "id": "dua-tre-ra-ben-ngoai"
        },
        {
          "title": "Giúp trẻ giữ vệ sinh thân thể",
          "id": "giup-tre-giu-ve-sinh-than-the"
        },
        {
          "title": "Giúp trẻ mặc quần áo",
          "id": "giup-tre-mac-quan-ao"
        },
        {
          "title": "Khi trẻ thay đổi hành vi",
          "id": "khi-tre-thay-doi-hanh-vi"
        },
        {
          "title": "Đảm bảo an toàn tại nhà",
          "id": "dam-bao-an-toan-tai-nha"
        }
      ],
      "/dac-diem": [
        {
          "title": "Biểu hiện đa dạng",
          "id": "bieu-hien-da-dang"
        },
        {
          "title": "Tương tác xã hội",
          "id": "tuong-tac-xa-hoi"
        },
        {
          "title": "Lời nói, ngôn ngữ, giao tiếp",
          "id": "loi-noi-ngon-ngu-giao-tiep"
        },
        {
          "title": "Hành vi và sở thích",
          "id": "hanh-vi-va-so-thich"
        },
        {
          "title": "Quá trình phát triển",
          "id": "qua-trinh-phat-trien"
        },
        {
          "title": "Bình thường hay bất thường",
          "id": "binh-thuong-hay-bat-thuong"
        },
        {
          "title": "Thoái lui phát triển",
          "id": "thoai-lui-phat-trien"
        },
        {
          "title": "Kém tiếp xúc mắt",
          "id": "kem-tiep-xuc-mat"
        },
        {
          "title": "Không chia sẻ sự chú ý",
          "id": "khong-chia-se-su-chu-y"
        },
        {
          "title": "Hành vi tự kích thích",
          "id": "hanh-vi-tu-kich-thich"
        },
        {
          "title": "Không thích ôm ấp",
          "id": "khong-thich-om-ap"
        },
        {
          "title": "Rối loạn cảm giác",
          "id": "roi-loan-cam-giac"
        },
        {
          "title": "Không phản ứng với lời nói",
          "id": "khong-phan-ung-voi-loi-noi"
        },
        {
          "title": "Trẻ không biết đau",
          "id": "tre-khong-biet-dau"
        }
      ],
      "/dieu-tri": [
        {
          "title": "Những khó khăn thường gặp",
          "id": "nhung-kho-khan-thuong-gap"
        },
        {
          "title": "Mục tiêu của điều trị tự kỷ",
          "id": "muc-tieu-cua-dieu-tri-tu-ky"
        },
        {
          "title": "Khả năng tái cấu trúc của não bộ",
          "id": "kha-nang-tai-cau-truc-cua-nao-bo"
        },
        {
          "title": "Những yếu tố quan trọng",
          "id": "nhung-yeu-to-quan-trong"
        },
        {
          "title": "Thời điểm bắt đầu điều trị",
          "id": "thoi-diem-bat-dau-dieu-tri"
        },
        {
          "title": "Can thiệp tích cực nghĩa là gì",
          "id": "can-thiep-tich-cuc-nghia-la-gi"
        },
        {
          "title": "Chọn phương pháp trị liệu cho con",
          "id": "chon-phuong-phap-tri-lieu-cho-con"
        },
        {
          "title": "Những phương pháp thường gặp",
          "id": "nhung-phuong-phap-thuong-gap"
        },
        {
          "title": "Can thiệp hành vi là gì",
          "id": "can-thiep-hanh-vi-la-gi"
        },
        {
          "title": "Phân tích hành vi ứng dụng",
          "id": "phan-tich-hanh-vi-ung-dung"
        },
        {
          "title": "Phương pháp Floortime",
          "id": "phuong-phap-floortime"
        },
        {
          "title": "Liệu pháp tích hợp cảm giác",
          "id": "lieu-phap-tich-hop-cam-giac"
        },
        {
          "title": "Phương pháp TEACCH",
          "id": "phuong-phap-teacch"
        },
        {
          "title": "Âm ngữ trị liệu",
          "id": "am-ngu-tri-lieu"
        },
        {
          "title": "Hệ thống giao tiếp trao đổi hình ảnh",
          "id": "he-thong-giao-tiep-trao-doi-hinh-anh"
        },
        {
          "title": "Vật lý trị liệu",
          "id": "vat-ly-tri-lieu"
        },
        {
          "title": "Huấn luyện các kĩ năng xã hội",
          "id": "huan-luyen-cac-ki-nang-xa-hoi"
        }
      ],
      "/dieu-tri-bang-thuoc": [
        {
          "title": "Vai trò của điều trị bằng thuốc",
          "id": "vai-tro-cua-dieu-tri-bang-thuoc"
        },
        {
          "title": "Trẻ có hành vi bất thường",
          "id": "tre-co-hanh-vi-bat-thuong"
        },
        {
          "title": "Các loại thuốc phổ biến",
          "id": "cac-loai-thuoc-pho-bien"
        },
        {
          "title": "Những điều bạn cần biết",
          "id": "nhung-dieu-ban-can-biet"
        },
        {
          "title": "Thuốc chống loạn thần",
          "id": "thuoc-chong-loan-than"
        },
        {
          "title": "Thuốc chống co giật",
          "id": "thuoc-chong-co-giat"
        },
        {
          "title": "Thuốc chống trầm cảm",
          "id": "thuoc-chong-tram-cam"
        }
      ],
      "/gioi-thieu": [],
      "/nguyen-nhan": [
        {
          "title": "Nguyên nhân của rối loạn",
          "id": "nguyen-nhan-cua-roi-loan"
        },
        {
          "title": "Vai trò của người mẹ",
          "id": "vai-tro-cua-nguoi-me"
        },
        {
          "title": "Vai trò của vắc xin",
          "id": "vai-tro-cua-vac-xin"
        },
        {
          "title": "Tự kỷ đang gia tăng",
          "id": "tu-ky-dang-gia-tang"
        }
      ],
      "/roi-loan-pho-tu-ky": [
        {
          "title": "Rối loạn Asperger",
          "id": "roi-loan-asperger"
        },
        {
          "title": "Hội chứng Rett",
          "id": "hoi-chung-rett"
        },
        {
          "title": "PDD – NOS",
          "id": "pdd-nos"
        },
        {
          "title": "Rối loạn thoái triển thời thơ ấu",
          "id": "roi-loan-thoai-trien-thoi-tho-au"
        }
      ],
      "/tam-soat": [
        {
          "title": "Tầm soát tự kỷ là gì",
          "id": "tam-soat-tu-ky-la-gi"
        },
        {
          "title": "Công cụ tầm soát tự kỷ",
          "id": "cong-cu-tam-soat-tu-ky"
        },
        {
          "title": "Những công cụ tầm soát thường dùng",
          "id": "nhung-cong-cu-tam-soat-thuong-dung"
        }
      ],
      "/toi-can-lam-gi": [
        {
          "title": "Những việc cần làm",
          "id": "nhung-viec-can-lam"
        },
        {
          "title": "Những câu hỏi thường gặp",
          "id": "nhung-cau-hoi-thuong-gap"
        }
      ],
      "/tu-ky-la-gi": [
        {
          "title": "Rối loạn tự kỷ là gì",
          "id": "roi-loan-tu-ky-la-gi"
        },
        {
          "title": "Rối loạn phổ tự kỷ",
          "id": "roi-loan-pho-tu-ky"
        },
        {
          "title": "Tự kỷ và rối loạn phổ tự kỷ",
          "id": "tu-ky-va-roi-loan-pho-tu-ky"
        },
        {
          "title": "Khái niệm “tự kỷ”",
          "id": "khai-niem-tu-ky"
        },
        {
          "title": "Rối loạn phát triển",
          "id": "roi-loan-phat-trien"
        },
        {
          "title": "Rối loạn phát triển lan tỏa",
          "id": "roi-loan-phat-trien-lan-toa"
        },
        {
          "title": "Tóm lại",
          "id": "tom-lai"
        }
      ]
    }

  
    return (
      <SectionProvider sections={allSections[pathname] ?? []}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 bg-gray-50 ">
              <div className="hidden lg:flex">
                <Link href="/" aria-label="Home">
                  <Logo className="h-6" />
                </Link>
              </div>
              <Header />
              <Navigation className="hidden lg:mt-10 lg:block" />
            </div>
          </motion.header>
          <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </SectionProvider>
    )
  }
  

