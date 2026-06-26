const database = [
    // =========================================================================
    //                  Bài 1. Khái niệm cơ bản về bệnh ung thư
    // =========================================================================
    {
        title: "Bài 1. Khái niệm cơ bản về bệnh ung thư",
        questions: [
            {
                q: "Có bao nhiêu phương pháp điều trị ung thư hiện nay  ?",
                options: ["1", "2", "3", "4"],
                correctIndex: 3
            },
            {
                q: "Đặc tính quan trọng nhất giúp phân biệt ung thư với u lành tính là:",
                options: [
                    "Tính xâm lấn",
                    "Tính di căn",
                    "Hình thái tế bào",
                    "Triệu chứng lâm sàng"
                ],
                correctIndex: 0
            },
            {
                q: "Câu nào sau đây sai:",
                options: [
                    "Ung thư là bệnh mãn tính",
                    "Ung thư người trẻ tiến triển nhanh hơn người già",
                    "Ung thư người trẻ tiến triển chậm hơn người già",
                    "Ung thư không phải 1 bệnh mà là nhiều bệnh"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư được phân ra",
                options: [
                    "Ung thư biểu mô, ung thư mô liên kết",
                    "Ung thư biểu mô, ung thư tổ chức đặc biệt",
                    "Ung thư mô liên kết, ung thư tổ chức",
                    "Ung thư biểu mô, ung thư mô liên kết, ung thư tổ chức đặc biệt"
                ],
                correctIndex: 3
            },
            {
                q: "Tác nhân ung thư đến từ môi trường bên ngoài chiếm bao nhiêu",
                options: [
                    "80%",
                    "70%",
                    "60%",
                    "50%"
                ],
                correctIndex: 0
            },
            {
                q: "Neoplasm là gì",
                options: [
                    "Thuật ngữ chỉ các khối u ác tính",
                    "Là thuật ngữ tiếng Anh chuyên ngành về khối u bao gồm nghiên cứu sự phát sinh, phát triển, chẩn đoán, điều trị và dự phòng ung bướu",
                    "Thuật ngữ thể hiện ung thư là sự xâm lấn vào các tế bào",
                    "Là tên riêng"
                ],
                correctIndex: 0
            },
            {
                q: "Đặc tính chung của tế bào ung thư, chọn sai:",
                options: [
                    "Tế bào tăng sinh vô hạn, vô tổ chức.",
                    "Đa số hình thành khối u.",
                    "Không thể di căn xa.",
                    "Đa số có biểu hiện mạn tính."
                ],
                correctIndex: 2
            },
            {
                q: "Quan niệm nào sau đây là đúng ?",
                options: [
                    "Ung thư là bệnh có thể điều trị khỏi khi ở giai đoạn sớm",
                    "Ung thư là bệnh vô phương cứu chữa",
                    "Ung thư phải điều trị bắt buộc bằng phẫu thuật",
                    "Không thể phòng ngừa được bệnh ung thư"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư có mấy đặc tính ?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 2
            },
            {
                q: "Tế bào UT có thể di căn theo con đường nào ?",
                options: [
                    "Đường bạch huyết",
                    "Đường máu",
                    "Đường kế cận",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Qua các nghiên cứu dịch tễ học của R.Doll và Petro trên 80% tác nhân sinh ung thư bắt nguồn từ",
                options: [
                    "Môi trường sống",
                    "Chế độ uống",
                    "Thuốc lá",
                    "Tất cả đều sai"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư có tiên lượng xấu nhất:",
                options: [
                    "Ung thư da",
                    "Ung thư cổ tử cung",
                    "Ung thư vú",
                    "Ung thư gan"
                ],
                correctIndex: 3
            },
            {
                q: "Loại ung thư có tiến triển chậm:",
                options: [
                    "UT máu",
                    "UT hạch",
                    "UT cổ tử cung",
                    "UT hắc tố"
                ],
                correctIndex: 2
            },
            {
                q: "Đặc tính quan trọng nhất của bệnh ung thư giúp phân biệt với các u lành tính là:",
                options: [
                    "U vỏ bọc, ranh giới rõ, không xâm lấn, di động khi sờ nắn",
                    "U vỏ bọc, ranh giới rõ, xâm lấn, di động khi sờ nắn",
                    "U vỏ bọc, ranh giới không rõ, xâm lấn, di động khi sờ nắn",
                    "U vỏ bọc, ranh giới rõ, không xâm lấn, không di động khi sờ nắn"
                ],
                correctIndex: 0
            },
            {
                q: "Bản chất của ung thư là ?",
                options: [
                    "Ác tính",
                    "Bán cấp",
                    "Mạn tính",
                    "Cấp tính"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư di căn theo mấy con đường ?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư ở cơ quan nào sau đây là ung thư tổ chức đặc biệt ?",
                options: [
                    "Dạ dày",
                    "Phổi",
                    "Đại tràng",
                    "Thần kinh"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                   Bài 2. Dịch tễ học mô tả bệnh ung thư
    // =========================================================================
    {
        title: "Bài 2. Dịch tễ học mô tả bệnh ung thư",
        questions: [
            {
                q: "Tỉ lệ tử vong được tính bằng:",
                options: [
                    "Số ca tử vong trên 100 dân mỗi năm",
                    "Số ca tử vong trên 1000 dân mỗi năm",
                    "Số ca tử vong trên 10.000 dân mỗi năm",
                    "Số ca tử vong trên 100.000 dân mỗi năm"
                ],
                correctIndex: 3
            },
            {
                q: "Loại ung thư chiếm tỷ lệ cao nhất ở nữ giới?",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư dạ dày",
                    "Ung thư tuyến giáp",
                    "Ung thư vú"
                ],
                correctIndex: 3
            },
            {
                q: "yếu tố nguy cơ liên quan đến bệnh ung thư khoang miệng bao gồm:",
                options: [
                    "Hút thuốc lá",
                    "Rượu, bia",
                    "Nhiễm HPV",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ mắc ung thư nào sau đây nam giới cao hơn nữ giới",
                options: [
                    "Ung thư tuyến giáp",
                    "Ung thư phổi",
                    "Ung thư thực quản",
                    "Ung thư tiền liệt tuyến"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư tinh hoàn thường mắc ở độ tuổi nào:",
                options: [
                    "10-19",
                    "20-29",
                    "30-39",
                    "40-49"
                ],
                correctIndex: 1
            },
            {
                q: "Yếu tố quan trọng nhất xác định nguy cơ mắc bệnh ung thư:",
                options: [
                    "Tuổi",
                    "Giới tính",
                    "Địa lý",
                    "Dân tộc"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mới mắc của ung thư phụ thuộc mấy yếu tố?",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                correctIndex: 1
            },
            {
                q: "Yếu tố nào quan trọng nhất xác định nguy cơ mắc bệnh ung thư",
                options: [
                    "Tuổi",
                    "Giới tính",
                    "Địa lí",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư tinh hoàn gặp ở độ tuổi nào?",
                options: [
                    "20-29",
                    ">30",
                    ">50",
                    ">70"
                ],
                correctIndex: 0
            },
            {
                q: "Dịch tễ học ung thư đề cập đến những vấn đề nào?",
                options: [
                    "Tỷ lệ mới mắc",
                    "Tỷ lệ chữa khỏi",
                    "Tỷ lệ bệnh tái phát",
                    "Không có ý nào đúng"
                ],
                correctIndex: 0
            },
            {
                q: "Yếu tố quan trọng nhất xác định nguy cơ mắc bệnh ung thư là",
                options: [
                    "Giới tính",
                    "Tuổi",
                    "Vùng địa lý",
                    "Yếu tố khác"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư phổi ở nam giới ở đâu có tỉ lệ mắc mới cao nhất:",
                options: [
                    "Nhật Bản",
                    "Ấn Độ",
                    "Mỹ da đen",
                    "Hàn Quốc"
                ],
                correctIndex: 2
            },
            {
                q: "Tỷ lệ mới mắc là được tính bằng số ca mới mắc trong quần thể trên:",
                options: [
                    "100.000/1 năm",
                    "200.000/1 năm",
                    "100.000/5 năm",
                    "100.000/10 năm"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ tử vong được tính bằng:",
                options: [
                    "Số ca tử vong/1.000.000 dân mỗi năm",
                    "Số ca tử vong/10.000 dân mỗi năm",
                    "Số ca tử vong/100.000 dân mỗi năm",
                    "Số ca tử vong/200.000 dân mỗi năm"
                ],
                correctIndex: 2
            },
            {
                q: "Tỷ lệ các loại ung thư nhiều hơn ở thế giới",
                options: [
                    "K tiền liệt tuyến",
                    "K cổ tử cung",
                    "K bàng quang",
                    "K miệng họng"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ các loại ung thư ít hơn thế giới",
                options: [
                    "K thực quản",
                    "K vòm",
                    "K lympho",
                    "K gan"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư nào có tỉ lệ mắc nhiều nhất ở nước ta",
                options: [
                    "Ung thư gan",
                    "Ung thư phổi",
                    "Ung thư vú",
                    "Ung thư thanh quản"
                ],
                correctIndex: 0
            },
            {
                q: "Trong các loại ung thư ở nữ giới, ung thư vú xếp vị trí:",
                options: [
                    "Thứ nhất",
                    "Thứ 2",
                    "Thứ 3",
                    "Thứ 4"
                ],
                correctIndex: 0
            },
            {
                q: "Cách tính tỷ lệ mới mắc",
                options: [
                    "Bằng số ca mới mắc trong quần thể trên 100.000 dân mỗi năm",
                    "Bằng số ca mới mắc trong quần thể trên 200.000 dân mỗi năm",
                    "Bằng số ca mới mắc trong quần thể trên 10.000 dân mỗi năm",
                    "Bằng số ca mới mắc trong quần thể trên 1000 dân mỗi năm"
                ],
                correctIndex: 0
            },
            {
                q: "Cách tính tỷ lệ tử vong",
                options: [
                    "Bằng số ca tử vong trên 10.000 dân mỗi năm",
                    "Bằng số ca tử vong trên 100.000 dân mỗi năm",
                    "Bằng số ca tử vong trên 1000 dân mỗi năm",
                    "Bằng số ca tử vong trên 2000 dân mỗi năm"
                ],
                correctIndex: 1
            },
            {
                q: "Tại Việt Nam năm 2012, số ca ung thư mới mắc ở nam là:",
                options: [
                    "50.123",
                    "71.940",
                    "95.430",
                    "110.538"
                ],
                correctIndex: 1
            },
            {
                q: "Tại Việt Nam năm 2012, số ca ung thư mới mắc ở nữ là:",
                options: [
                    "54.367",
                    "71.940",
                    "95.430",
                    "110.538"
                ],
                correctIndex: 0
            },
            {
                q: "Điều nào sau đây không đúng",
                options: [
                    "Nguy cơ mắc bệnh ung thư không liên quan đến tuổi",
                    "Mỗi loại ung thư đều có sự phân bổ địa lý riêng biệt",
                    "Tỉ lệ mới mắc đặc trưng theo nhóm tuổi của hầu hết các vị trí ung thư ở nam thường cao hơn ở nữ",
                    "Các câu trên đều đúng"
                ],
                correctIndex: 0
            },
            {
                q: "Ở thành phố Hồ Chí Minh, ung thư hay gặp nhất là",
                options: [
                    "Cổ tử cung",
                    "Gan",
                    "Phổi",
                    "Vú"
                ],
                correctIndex: 0
            },
            {
                q: "Độ tuổi nào thường gặp ở ung thư tinh hoàn?",
                options: [
                    "14-18",
                    "18-20",
                    "20-29",
                    "30-55"
                ],
                correctIndex: 2
            },
            {
                q: "Tỷ lệ tử vong được tính bằng số ca tử vong trên:",
                options: [
                    "10000 dân mỗi năm",
                    "100000 dân mỗi năm",
                    "20000 dân mỗi năm",
                    "300000 dân mỗi năm"
                ],
                correctIndex: 1
            },
            {
                q: "chọn đáp án đúng",
                options: [
                    "Dịch tễ học là 1 khoa học nghiên cứu sự phân bố tần số mắc hoặc chết đối với các bệnh trong vùng với những yếu tố quy định sự phân bố đó",
                    "Dịch tễ học gồm 2 bộ phận chủ yếu là dịch tễ học phân tích và dịch tễ học mô tả",
                    "Dịch tễ học phân tích có nhiệm vụ phân tích, kiểm định những giả thuyết hình thành tử dịch tễ học mô tả từ đó có những kết luận rõ ràng về nguyên nhân",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ tử vong được tính bằng",
                options: [
                    "Số ca tử vong trên 10.000 dân mỗi năm",
                    "số ca tử vong trên 1.000 dân mỗi năm",
                    "số ca tử vong trên 100.000 dân mỗi năm",
                    "số ca tử vong trên 1.000.000 dân mỗi năm"
                ],
                correctIndex: 2
            },
            {
                q: "Đâu là yếu tố quan trọng nhất xác định nguy cơ mắc bệnh ung thư",
                options: [
                    "Giới tính",
                    "Tuổi",
                    "Nghề nghiệp",
                    "Địa lý"
                ],
                correctIndex: 1
            },
            {
                q: "Tỷ lệ mới mắc của bạch cầu lympho cao nhất ở nhóm tuổi ?",
                options: [
                    "1-2",
                    "2-3",
                    "3-4",
                    "4-5"
                ],
                correctIndex: 2
            },
            {
                q: "Tỷ lệ mới mắc đặc trưng theo nhóm tuổi của hầu hết các vị trí ung thư ?",
                options: [
                    "Nam thường cao hơn nữ",
                    "Nữ cao hơn nam",
                    "Tỷ lệ bằng nhau",
                    "Tùy thuộc vào bệnh"
                ],
                correctIndex: 0
            },
            {
                q: "Loại ung thư chiếm chủ yếu ở phụ nữ là, trừ:",
                options: [
                    "Ung thư dạ dày",
                    "Ung thư vú",
                    "Ung thư đại trực tràng",
                    "Ung thư phổi"
                ],
                correctIndex: 0
            },
            {
                q: "Loại ung thư phổ biến nhất ở trẻ em là:",
                options: [
                    "Bệnh bạch cầu",
                    "Bệnh máu",
                    "Bệnh tủy xương",
                    "Bệnh thần kinh"
                ],
                correctIndex: 0
            },
            {
                q: "Yếu tố quan trọng nhất xác định nguy cơ gây ung thư",
                options: [
                    "Tuổi",
                    "Giới tính",
                    "Địa lý",
                    "Yếu tố khác"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ tử vong tỉnh trên bao nhiêu người mỗi năm thu",
                options: [
                    "50 000",
                    "100 000",
                    "150 000",
                    "200 000"
                ],
                correctIndex: 1
            },
            {
                q: "Tỉ lệ mắc bệnh toàn bộ đánh giá:",
                options: [
                    "Ảnh hưởng của bệnh đối với sức khỏe cộng đồng",
                    "Gánh nặng về bệnh tật của cộng đồng",
                    "Tỉ lệ mắc một bệnh ung thư trong tất cả cộng đồng",
                    "Có thể tính bằng số ca mắc ung thư trong các trung tâm ung bướu ở cộng đồng."
                ],
                correctIndex: 1
            },
            {
                q: "Tác nhân gây ung thư phổi:",
                options: [
                    "EBV",
                    "Mỡ động vật",
                    "Phẩm nhuộm",
                    "Amiăng"
                ],
                correctIndex: 3
            },
            {
                q: "Theo số liệu thống kê năm 2020, ung thư nào chiếm tỷ lệ cao nhất tại Việt Nam",
                options: [
                    "Ung thư vú",
                    "Ung thư dạ dày",
                    "Ung thư phổi",
                    "Ung thư gan"
                ],
                correctIndex: 3
            },
            {
                q: "Yếu tố quan trọng nhất xác định nguy cơ mắc bệnh ung thư?",
                options: [
                    "Tuổi",
                    "Giới tính",
                    "Tôn giáo",
                    "Địa lý"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ tử vong?",
                options: [
                    "Được tính bằng số ca tử vong trên 100000 dân mỗi năm",
                    "Được tính số ca tử vong trên 100000 dân mỗi tháng",
                    "Được tính bằng số ca tử vong trên 1000 dân mỗi năm",
                    "Được tính bằng số ca tử vong trên 1000 dân mỗi tháng"
                ],
                correctIndex: 0
            },
            {
                q: "Độ tuổi nào thường gặp ở ung thư tinh hoàn?",
                options: [
                    "20-29 tuổi",
                    "13-18 tuổi",
                    "40-49 tuổi",
                    ">50 tuổi"
                ],
                correctIndex: 0
            },
            {
                q: "Yếu tố nào quan trọng nhất xác định nguy cơ mắc bệnh ung thư?",
                options: [
                    "Tuổi",
                    "Giới",
                    "Địa lý",
                    "Chủng tộc"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ mới mắc ung thư vú sau mãn kinh, ý nào sau đây sai?",
                options: [
                    "Tăng liên tục ở Mỹ",
                    "Thấp ở Nam Tư",
                    "Giảm ở Nhật Bản",
                    "Tất cả đáp án đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Trung tâm ghi nhận ung thư toàn cầu, ước tính tỉ lệ mắc, tỉ lệ tử vong của ung thư trên toàn thế giới là",
                options: [
                    "IARC",
                    "IACR",
                    "IACC",
                    "IARR"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mới mắc được tính bằng",
                options: [
                    "Số ca mắc mới / 100000 dân trong 1 năm",
                    "Số ca mắc mới / 100000 dân trong 5 năm",
                    "Số ca mắc mới / 100000 dân trong 10 năm",
                    "Số ca mắc mới / 100000 dân trong 1 tháng"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mới mắc được tính bằng",
                options: [
                    "Số ca mắc mới / 100000 dân trong 1 năm",
                    "Số ca mắc mới / 1000000 dân trong 1 năm",
                    "Số ca mắc mới / 10000 dân trong 1 năm",
                    "Số ca mắc mới / 200000 dân trong 1 năm"
                ],
                correctIndex: 0
            },
            {
                q: "Số ca mắc ung thư máu tại Việt nam năm 2020",
                options: [
                    "khoảng 4000 ca",
                    "khoảng 6000 ca",
                    "khoảng 8000 ca",
                    "khoảng 10000 ca"
                ],
                correctIndex: 1
            },
            {
                q: "Năm 2020 nước nào có tỷ lệ mắc ung thư cao nhất",
                options: [
                    "Trung quốc",
                    "Mỹ",
                    "Ấn độ",
                    "Nhật Bản"
                ],
                correctIndex: 0
            },
            {
                q: "Ở thành phố HCM các ung thư hay gặp là ,chọn ý sai",
                options: [
                    "Ung thư cổ tử cung",
                    "Ung thư gan",
                    "Ung thư vú",
                    "Ung thư dạ dày"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ mắc bệnh toàn bộ đánh giá",
                options: [
                    "Ảnh hưởng của bệnh đối với sức khỏe cộng đồng",
                    "Gánh nặng về bệnh tật của cộng đồng",
                    "Tỷ lệ mắc một bệnh ung thư trong cộng đồng",
                    "Tỷ lệ mắc một nhóm bệnh trong cộng đồng"
                ],
                correctIndex: 1
            },
            {
                q: "Thuốc lá là nguyên nhân gây....các bệnh ung thư ở người (điền từ thích hợp)",
                options: [
                    "10%",
                    "20%",
                    "30%",
                    "40%"
                ],
                correctIndex: 2
            },
            {
                q: "Tại VN, 2012; số ca ung thư mới mắc là?",
                options: [
                    "126.307",
                    "126.308",
                    "126.309",
                    "126.310"
                ],
                correctIndex: 0
            },
            {
                q: "Tại VN, 2012; số ca ung thư mới mắc ở nam là",
                options: [
                    "71.940",
                    "71.941",
                    "71.942",
                    "71.943"
                ],
                correctIndex: 0
            },
            {
                q: "Đâu là yếu tố nguy cơ mắc bệnh ung thư quan trọng nhất:",
                options: [
                    "Giới tính",
                    "Tuổi",
                    "Địa lý",
                    "Di truyền"
                ],
                correctIndex: 1
            },
            {
                q: "Chỉ số đo thời gian rút ngắn của lâm sàng (PYLL):",
                options: [
                    "Đánh giá số năm sống trung bình của một người mà không phải chết do nguyên nhân tự nhiên",
                    "Đánh giá số năm sống trung bình của một người mà không phải chết trên lâm sàng",
                    "Đánh giá số năm sống trung bình của một người mà chết do nguyên nhân tự nhiên",
                    "Đánh giá số năm sống trung bình của một người mà chết trên lâm sàng"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ chữa khỏi bệnh ung thư tại Việt Nam là ?",
                options: [
                    "20%",
                    "40%",
                    "30%",
                    "50%"
                ],
                correctIndex: 3
            },
            {
                q: "Thuốc lá chiếm bao nhiêu phần trăm ung thư phế quản",
                options: [
                    "90%",
                    "80%",
                    "50%",
                    "40%"
                ],
                correctIndex: 0
            },
            {
                q: "Đặc tính nguy hiểm nhất của bệnh ung thư",
                options: [
                    "Xâm lấn",
                    "Di căn",
                    "Mạn tính",
                    "Hay tái phát"
                ],
                correctIndex: 1
            },
            {
                q: "Tỷ lệ mới mắc của bệnh bạch cầu lympho có đỉnh cao ở nhóm tuổi:",
                options: [
                    "5-7 tuổi",
                    "3-4 tuổi",
                    "15-18 tuổi",
                    "25-35 tuổi",
                ],
                correctIndex: 1
            },
            {
                q: "Các chỉ số hoàn cảnh xã hội ảnh hưởng đến sự khác biệt về nguy cơ mắc bệnh ung thư:",
                options: [
                    "Giáo dục",
                    "Mức thu nhập",
                    "Chế độ ăn uống",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Tỉ lệ mới mắc đặc trưng theo nhóm tuổi ở hầu hết các vị trí",
                options: [
                    "Nam thường cao hơn nữ",
                    "Nữ thường cao hơn nam",
                    "Tương đương nhau",
                    "Tùy thống kê tại từng thời điểm",
                    "Cả 3 đáp án trên"
                ],
                correctIndex: 0
            },
            {
                q: "Tại Việt Nam hiện nay loại ung thư nào chiếm tỷ lệ nhiều nhất",
                options: [
                    "Ung thư phổi",
                    "Ung thư dạ dày",
                    "Ung thư gan",
                    "Ung thư vú"
                ],
                correctIndex: 2
            },
            {
                q: "Hiện nay loại Ung thư chiếm tỉ lệ nhiều nhất nước ta là:",
                options: [
                    "ung thư Gan",
                    "Ung thư Phổi",
                    "Ung thư dạ dày",
                    "Ung thư đại tràng"
                ],
                correctIndex: 0
            },
            {
                q: "Ở nước ta hiện nay vùng có tỉ lệ mắc Ung thư Phổi nhiều nhất:",
                options: [
                    "TP Hồ Chí Minh",
                    "Hà Nội",
                    "Quảng Ninh",
                    "Tây Ninh"
                ],
                correctIndex: 1
            },
            {
                q: "Câu nào dưới đây là ĐÚNG về tỷ lệ tử vong",
                options: [
                    "Bằng số ca tử vong trên 100.000 dân mỗi năm",
                    "Phản ánh toàn bộ dân cư hay từng giới, nhóm tuổi",
                    "Đa số số ca tử vong phụ thuộc vào cấu trúc tuổi",
                    "Cả A, B, C đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Câu nào dưới đây là ĐÚNG về tỷ lệ mới mắc",
                options: [
                    "Bằng số ca mới mắc trong quần thể trên 100.000 mỗi năm",
                    "Thường dùng để cung cấp dữ liệu về sự xuất hiện của ung thư",
                    "Tỷ lệ mới mắc là cách tính tốt nhất của tần suất mắc ung thư",
                    "Cả A,B,C đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ nam nữ ở bệnh nhân mắc ung thư là?",
                options: [
                    "3/4",
                    "5/4",
                    "4/5",
                    "4/3"
                ],
                correctIndex: 1
            },
            {
                q: "Tỉ lệ tử vong tính trên bao nhiêu người mỗi năm",
                options: [
                    "100 000",
                    "1 000 000",
                    "10 000",
                    "150 000"
                ],
                correctIndex: 1
            },
            {
                q: "Công thức tính tỷ lệ tử vong do ung thư:",
                options: [
                    "số ca tử vong/100000 dân mỗi năm",
                    "số ca tử vong/10000 dân mỗi năm",
                    "số ca tử vong/1000 dân mỗi năm",
                    "số ca tử vong/100 dân mỗi năm"
                ],
                correctIndex: 0
            },
            {
                q: "Công thức tính tỷ lệ mắc bệnh toàn bộ:",
                options: [
                    "Tổng số ca ung thư/100000 dân",
                    "Tổng số ca ung thư/10000 dân",
                    "Tổng số ca ung thư/1000 dân",
                    "Tổng số ca ung thư 100 dân"
                ],
                correctIndex: 0
            },
            {
                q: "Dịch tễ học ung thư đề cập đến những vấn đề nào, ngoại trừ",
                options: [
                    "Tỉ lệ mới mắc",
                    "Tỉ lệ mắc toàn bộ",
                    "Tỉ lệ tử vong",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Loại ung thư người Mỹ da đen có tỉ lệ mắc cao là:",
                options: [
                    "Ung thư phổi",
                    "Ung thư vú",
                    "Ung thư đại trực tràng",
                    "Ung thư tuyến giáp"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư dạ dày đứng thứ nhất cho cả 2 giới ở nước nào?",
                options: [
                    "Việt Nam",
                    "Nhật bản",
                    "Hàn quốc",
                    "Trung quốc"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư dương vật và ung thư cổ tử cung rất thấp ở người dân tộc:",
                options: [
                    "Kinh",
                    "Do Thái",
                    "Thái",
                    "Mông"
                ],
                correctIndex: 1
            },
            {
                q: "Tỉ lệ mới mắc :",
                options: [
                    "Được tính bằng số ca mới mắc trong quần thể trên 100.000 dân tính trong năm",
                    "Được tính bằng số ca mới mắc trong quần thể trên 10.000 dân tính trong năm",
                    "Được tính bằng số ca mới mắc trong quần thể trên 1.000 dân tỉnh trong năm",
                    "Được tính bằng số ca mới mắc trong quần thể trên 100 dân tính trong năm"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ mắc bệnh toàn bộ :",
                options: [
                    "Là con số ước tính về số người mắc ung thư (ở tất cả các vị trí Ung thư hay gộp lại ở một vị trí nào đó) những người này sống tại một thời điểm trong khoảng một thời gian xác định",
                    "Là con số ước tính về số người mắc ung thư (ở tất cả các vị trí Ung thư hay gộp lại ở một vị trí nào đó) những người này sống tại một thời điểm trong khoảng một thời gian không xác định",
                    "Là con số ước tính về số người mắc ung thư (ở tất cả các vị trí Ung thư hay gộp lại ở một vị trí nào đó) những người này sống tại một thời điểm trong khoảng một không gian xác định",
                    "Là con số ước tính về số người mắc ung thư (ở tất cả các vị trí Ung thư hay gộp lại ở một vị trí nào đó) những người này sống tại một thời điểm trong khoảng không gian không xác định"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ nam giới ung thư phổi cao nhất ở đâu",
                options: [
                    "Nhật Bản",
                    "Ấn Độ",
                    "Người Mỹ da đen",
                    "Người da đỏ"
                ],
                correctIndex: 2
            },
            {
                q: "Tỉ lệ tử vong:",
                options: [
                    "Được tính bằng số ca tử vong trên 1000 dân mỗi năm",
                    "Được tính bằng số ca tử vong trên 10.000 dân mỗi năm",
                    "Được tính bằng số ca tử vong trên 100.000 dân mỗi năm",
                    "Được tính bằng số ca tử vong trên 1.000.000 dân mỗi năm"
                ],
                correctIndex: 2
            },
            {
                q: "Tỷ lệ nam/nữ ở bệnh nhân mắc ung thư là?",
                options: [
                    "3/4",
                    "7/4",
                    "5/4",
                    "1/4"
                ],
                correctIndex: 2
            },
            {
                q: "Dịch tễ học ung thư là:",
                options: [
                    "Môn học nghiên cứu về sự phân bố ung thư trong một quần thể dân cư",
                    "Những yếu tố có liên quan như tuổi tác, nghề nghiệp, chủng tộc, văn hóa, tập quán,...",
                    "Nghiên cứu dịch tễ ung thư cung cấp những thông tin rất giá trị, góp phần làm sáng tỏ nguyên nhân sinh ung thư",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "1 số yếu tố thường được khảo sát trong các nghiên cứu dịch tễ học ung thư",
                options: [
                    "Xuất độ ung thư",
                    "Yếu tố địa dư",
                    "Di truyền",
                    "Tất cả ý trên"
                ],
                correctIndex: 3
            },
            {
                q: "Tỉ lệ mắc ung thư ở nam và nữ là:",
                options: [
                    "Nam > nữ",
                    "Nam < nữ",
                    "Nam = nữ",
                    "Tất cả đều sai"
                ],
                correctIndex: 0
            },
            {
                q: "Loại ung thư hay gặp ở nữ giới là:",
                options: [
                    "Ung thư tử cung",
                    "Ung thư vú",
                    "Ung thư tuyến giáp",
                    "Ung thư xương"
                ],
                correctIndex: 1
            },
            {
                q: "Loại ung thư người Mỹ da đen có tỉ lệ mắc cao là:",
                options: [
                    "Ung thư phổi",
                    "Ung thư vú",
                    "Ung thư trực tràng",
                    "Ung thư tuyến giáp"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư nghề nghiệp lần đầu được đề cập chi tiết tại Anh vào thế kỷ 18 là bệnh ung thư:",
                options: [
                    "Ung thư da bìu",
                    "Ung thư phổi",
                    "Ung thư bàng quang",
                    "Ung thư màng phổi"
                ],
                correctIndex: 0
            },
            {
                q: "Theo thống kê tỷ lệ mắc ung thư tuyến giáp ở Việt Nam trên 100000 dân",
                options: [
                    "15",
                    "16.5",
                    "16",
                    "17.5"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư phổ biến nhất tại Việt Nam",
                options: [
                    "Ung thư gan",
                    "Ung thư phổi",
                    "Ung thư dạ dày",
                    "Ung thư tuyến giáp"
                ],
                correctIndex: 0
            },
            {
                q: "PYLL là gi",
                options: [
                    "Chỉ số đo thời gian của lâm sàng",
                    "Chỉ số đo tỉ lệ mắc ung thư trên 100000 dân",
                    "Chỉ số đo thời gian rút ngắn của lâm sàng",
                    "Chỉ số đo tỉ lệ mắc ung thư của Nhật Bản"
                ],
                correctIndex: 2
            },
            {
                q: "Ý nghĩa của tỉ lệ mới mắc:",
                options: [
                    "Cung cấp những thông tin dữ liệu về sự xuất hiện ung thư trong quần thể theo nhóm tuổi",
                    "Cung cấp những thông tin dữ liệu về sự xuất hiện ung thư trong quần thể theo nhóm tuổi, giới tính, chủng tộc",
                    "Cung cấp những thông tin dữ liệu về sự xuất hiện ung thư trong quần thể theo nhóm tuổi, giới tính, địa lý",
                    "Cung cấp những thông tin dữ liệu về sự xuất hiện ung thư trong quân thể theo nhóm bệnh, nhóm tuổi, giới tính"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư vú ở nước nào có tỉ lệ cao nhất:",
                options: [
                    "Mỹ",
                    "Nhật",
                    "Đức",
                    "Pháp"
                ],
                correctIndex: 0
            },
            {
                q: "Virut viêm gan B gây ung thư gan nguyên phát hay gặp ở đâu?",
                options: [
                    "Châu Phi",
                    "Châu Á",
                    "Châu Âu",
                    "Cả A và B"
                ],
                correctIndex: 3
            },
            {
                q: "Virut HTLV1 là loại virut liên quan đến bệnh gì?",
                options: [
                    "Ung thư vòm mũi họng",
                    "Bệnh bạch cầu tế bào T",
                    "Bệnh bạch cầu tủy cấp",
                    "U lympho"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mắc bệnh toàn bộ, chọn Ý SAI:",
                options: [
                    "Ước tính bằng tỉ lệ mới mắc chia cho khoảng thời gian bệnh kéo dài",
                    "Là con số ước tính về số người mắc ung thư, những người này sống tại 1 thời điểm nhất định hoặc vào 1 thời điểm trong khoảng 1 thời gian nhất định",
                    "Được tính bằng tổng số ca ung thư trên 1.000.000 dân nếu căn cứ vào dân nói chung",
                    "Không dùng để đánh giá gánh nặng về bệnh tật của cộng đồng"
                ],
                correctIndex: 1
            },
            {
                q: "Sự dao động của tỉ lệ mới mắc giữa các loại ung thư do những yếu tố nào?",
                options: [
                    "Tuổi, giới tính",
                    "Chủng tộc, tôn giáo, hoàn cảnh xã hội",
                    "Địa lý",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Bệnh nhân bị nhiễm virus viêm gan B có xác suất ung thư gan cao gấp mấy lần người bình thường?",
                options: [
                    "10",
                    "100",
                    "1000",
                    "900"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư tinh hoàn hay gặp ở độ tuổi nào",
                options: [
                    "20-29",
                    "22-29",
                    "21-29",
                    "19-29"
                ],
                correctIndex: 0
            },
            {
                q: "Nước có tỷ lệ ung thư dạ dày cao nhất",
                options: [
                    "Nhật Bản",
                    "Anh",
                    "Hàn Quốc",
                    "Mỹ"
                ],
                correctIndex: 0
            },
            {
                q: "Các yếu tố liên quan đến dinh dưỡng là nguyên nhân gây ra ... các bệnh ung thư:",
                options: [
                    "15%",
                    "25%",
                    "35%",
                    "45%"
                ],
                correctIndex: 2
            },
            {
                q: "Tỉ lệ mắc ung thư phổi ở người hút thuốc lá cao hơn người không hút thuốc lá bao nhiêu lần:",
                options: [
                    "5",
                    "10",
                    "15",
                    "20"
                ],
                correctIndex: 1
            },
            {
                q: "Yếu tố quan trọng nhất để xác định nguy cơ mắc ung thư:",
                options: [
                    "Giới tính",
                    "Địa lý",
                    "Tuổi",
                    "Các yếu tố khác"
                ],
                correctIndex: 2
            },
            {
                q: "Nước nào trong các nước sau đây có tỉ lệ mắc mới ung thư dạ dày cao nhất",
                options: [
                    "Việt Nam",
                    "Mỹ",
                    "Ấn Độ",
                    "Nhật Bản"
                ],
                correctIndex: 3
            },
            {
                q: "Tỉ lệ ung thư vú ở phụ nữ Mỹ?",
                options: [
                    "20%",
                    "21%",
                    "23%",
                    "24%"
                ],
                correctIndex: 3
            },
            {
                q: "Dịch tễ học bao gồm mấy bộ phận chủ yếu:",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 1
            },
            {
                q: "Theo số liệu thống kê năm 2020, ung thư nào chiếm tỷ lệ cao nhất tại Việt Nam?",
                options: [
                    "Ung thư dạ dày",
                    "Ung thư gan",
                    "Ung thư vú",
                    "Ung thư phổi"
                ],
                correctIndex: 1
            },
            {
                q: "Loại ung thư hay gặp ở nữ giới là:",
                options: [
                    "Ung thư vú",
                    "Ung thư gan",
                    "Ung thư xương",
                    "Ung thư dạ dày"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mới mắc của các loại ung thư phụ thuộc vào:",
                options: [
                    "Tuổi",
                    "Giới",
                    "Địa lý",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Các loại bệnh ung thư có những điểm khác biệt về:",
                options: [
                    "Nguyên nhân",
                    "Phương pháp điều trị",
                    "Tiến triển của bệnh",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ nam nữ ở bệnh nhân mắc ung thư là?",
                options: [
                    "3/4",
                    "7/4",
                    "5/4",
                    "1/4"
                ],
                correctIndex: 2
            },
            {
                q: "Trung tâm ghi nhận ung thư toàn cầu là tổ chức:",
                options: [
                    "IARC",
                    "FDA",
                    "NATO",
                    "EU"
                ],
                correctIndex: 0
            },
            {
                q: "Dịch tễ học mô tả bệnh ung thư gồm những bộ phận nào",
                options: [
                    "Dịch tễ mô tả và dịch tễ đánh giá",
                    "Dịch tễ mô tả và dịch tễ tổng hợp",
                    "Dịch tễ mô tả và dịch tễ phân tích",
                    "Dịch tễ mô tả và dịch tễ thu thập"
                ],
                correctIndex: 2
            },
            {
                q: "Thuốc lá là nguyên nhân gây ... bệnh ung bệnh ung thư phổi:",
                options: [
                    "70%",
                    "80%",
                    "60%",
                    "90%"
                ],
                correctIndex: 3
            },
            {
                q: "Tỉ lệ mới mắc của bệnh bạch cầu lympho có đỉnh cao ở tuổi nào?",
                options: [
                    "2-3",
                    "3-4",
                    "4-5",
                    "5-10"
                ],
                correctIndex: 1
            },
            {
                q: "Câu nào sau đây sai về sự dao động của tỉ lệ mới mắc trong dịch tễ học ung thư?",
                options: [
                    "Tỉ lệ mới mắc ở người lớn tuổi thường có xu hướng tăng nhanh hơn so với tuổi trẻ",
                    "1/3 dân số sẽ có nguy cơ mắc bệnh ung thư trước 75 tuổi ở hầu hết các nước đang phát triển.",
                    "Các vị trí ung thư ở nam thường cao hơn nữ",
                    "Tỉ lệ mới mắc của bệnh bạch cầu lympho có đỉnh cao ở tuổi 3-4"
                ],
                correctIndex: 0
            },
            {
                q: "Tỉ lệ mới mắc ung thư phổi ở BomBay là bao nhiêu :",
                options: [
                    "ASR=19,5",
                    "ASR=15,7",
                    "ASR=190",
                    "ASR=160"
                ],
                correctIndex: 1
            },
            {
                q: "Yếu tố nguy cơ quan trọng nhất để phát hiện bệnh ung",
                options: [
                    "Tuổi",
                    "Giới",
                    "Địa lý",
                    "Hoàn cảnh xã hội"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ mới mắc là",
                options: [
                    "Số cả mới mắc trong quần thể tính trong 100000/ năm",
                    "Số ca mới mắc trong quần thể tính trong 10000 dân/ năm",
                    "Số ca mới mắc trong quần thể tính trong 50000 dân năm",
                    "Số ca mới mắc trong quần thể tính trong 1000 dân/ năm"
                ],
                correctIndex: 0
            },
            {
                q: "tỷ lệ tử vong",
                options: [
                    "Bằng số ca tử vong/10000 dân trong năm",
                    "Bằng số ca tử vong/50000 dân trong năm",
                    "Bằng số ca tử vong/70000 dân trong năm",
                    "Bằng số ca tử vong/100000 dân trong năm"
                ],
                correctIndex: 3
            },
            {
                q: "Yếu tố nào là yếu tố quan trọng nhất để xác định nguy cơ mắc ung thư:",
                options: [
                    "Giới tính",
                    "Địa lý",
                    "Tuổi",
                    "Cả 3 đáp án trên"
                ],
                correctIndex: 2
            },
            {
                q: "Tỉ lệ mới mắc là gì:",
                options: [
                    "Được tính bằng số ca mới mắc trong quần thể trên 100.000 dân tính trong 1 năm",
                    "Được tính bằng số ca mới mắc trong quần thể trên 100.000.000 dân tính trong 1 năm",
                    "Được tính bằng số ca mới mắc trong quần thể trên 100.000 dân tính trong 10 năm",
                    "Được tỉnh bằng số ca mới mắc trong quần thể trên 100.000.000 dân tính trong 10 năm"
                ],
                correctIndex: 0
            },
            {
                q: "Sự khác biệt về tỉ lệ mới mắc của các loại ung thư đặc trưng giữa các quần thể hoặc cá thể được xác định bởi các yếu tố?",
                options: [
                    "Tuổi",
                    "Địa Lý",
                    "Các yếu tố khác: tôn giáo, dân tộc, hoàn cảnh",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Trung tâm ghi nhận ung thư toàn cầu, ước tính tỉ lệ mắc, tỉ lệ tử vong",
                options: [
                    "IARC",
                    "IACR",
                    "IACC",
                    "IARR"
                ],
                correctIndex: 0
            },
            {
                q: "Yếu tố trọng tâm để xác định nguy cơ cao mắc ung thư:",
                options: [
                    "Giới tính",
                    "Dân tộc",
                    "Tuổi",
                    "Nghề nghiệp"
                ],
                correctIndex: 2
            },
            {
                q: "5 bệnh ung thư thường gặp ở Việt Nam, xét cả 2 giới theo thứ tự là",
                options: [
                    "Phổi-> Vú -> Đại trực tràng -> Tuyến tiền liệt -> Dạ dày",
                    "Dạ dày -> Vú -> Đại trực tràng -> Tuyến tiền liệt -> Phổi",
                    "Gan -> Phổi -> Vú -> Dạ dày -> Đại trực tràng",
                    "Gan -> Phổi -> Dạ dày -> Vú -> Đại trực tràng"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư thường gặp nhất ở Việt Nam",
                options: [
                    "Gan",
                    "Phối",
                    "Vú",
                    "Dạ dày"
                ],
                correctIndex: 0
            },
            {
                q: "Yếu tố quan trọng nhất xác định nguy cơ mắc ung thư",
                options: [
                    "Tuổi",
                    "Giới tính",
                    "Phong tục tập quán",
                    "Tôn giáo"
                ],
                correctIndex: 0
            },
            {
                q: "Tỷ lệ mới mắc ung thư theo nhóm tuổi của hầu hết các vị trí ung thư ?",
                options: [
                    "Nữ cao hơn nam",
                    "Nam cao hơn nữ",
                    "Nam nữ bằng nhau",
                    "Không xác định được"
                ],
                correctIndex: 1
            },
            {
                q: "Loại ung thư hay gặp ở nữ giới là:",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư dạ dày",
                    "Ung thư tuyến giáp",
                    "Ung thư vú"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư vú ở nước nào có tỉ lệ cao nhất:",
                options: [
                    "Việt Nam",
                    "Nhật",
                    "Đức",
                    "Mỹ"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //             Bài 3. Quá trình tiến triển tự nhiên của ung thư
    // =========================================================================
    {
        title: "Bài 3. Quá trình tiến triển tự nhiên của ung thư",
        questions: [
            {
                q: "Quá trình tiến triển tự nhiên của ung thư trải qua bao nhiêu giai đoạn ?",
                options: ["5", "6", "7", "8"],
                correctIndex: 1
            },
            {
                q: "Giai đoạn khởi phát của ung thư có các đặc điểm, ngoại trừ:",
                options: [
                    "Diễn ra rất nhanh",
                    "Hoàn tất trong khoảng vài phần giây",
                    "Không thể đảo ngược được",
                    "Tất cả tế bào đều sinh bệnh"
                ],
                correctIndex: 3
            },
            {
                q: "Tế bào ung thư có những đặc tính nào sau đây, trừ:",
                options: [
                    "Tính di động của các tế bào ung thư",
                    "Khối u phát triển chậm",
                    "Khả năng tiêu đạm ở các cấu trúc nâng đỡ của mô và cơ quan",
                    "Mất ức chế tiếp xúc của các tế bào"
                ],
                correctIndex: 1
            },
            {
                q: "Giai đoạn thúc đẩy bao gồm đặc điểm nào, trừ:",
                options: [
                    "Sự thay đổi biểu hiện của gen",
                    "Sự bành trướng đơn dòng có chọn lọc",
                    "Sự xâm lấn",
                    "Sự tăng sinh tế báo khởi phát"
                ],
                correctIndex: 2
            },
            {
                q: "Có mấy giai đoạn tiến triển",
                options: [
                    "6",
                    "7",
                    "8",
                    "9"
                ],
               correctIndex: 0
            },
            {
                q: "Giai đoạn lâm sàng chiếm bao nhiêu % thời gian tiến triển tự nhiên",
                options: [
                    "25",
                    "35",
                    "45",
                    "55"
                ],
               correctIndex: 0
            },
            {
                q: "Đặc điểm tế bào ung thư",
                options: [
                    "Phát triển chậm",
                    "Có thể tự khỏi",
                    "Tính xâm lấn",
                    "Tính hoại tử"
                ],
               correctIndex: 2
            },
            {
                q: "Con đường di căn của ung thư, trừ",
                options: [
                    "Mạch máu",
                    "Bạch huyết",
                    "Đường kế cận",
                    "Đường tiếp xúc"
                ],
               correctIndex: 3
            },
            {
                q: "Thứ tự thời gian quá trình tiến triển tự nhiên của ung thư trải qua 6 giai đoạn theo trình tự nào",
                options: [
                    "Khởi phát, tiển triển, tăng trưởng, lan tràn, thúc đẩy, chuyển biến",
                    "Khởi phát, chuyển biến, tăng trưởng, lan tràn, thúc đẩy, tiến triển",
                    "Khởi phát, tăng trưởng, thúc đẩy, chuyển biến, lan tràn, tiến triển",
                    "Khởi phát, tăng trưởng, tiến triển, thúc đẩy, lan tràn, chuyển biến"
                ],
               correctIndex: 2
            },
            {
                q: "Trong quá trình tiến triển tự nhiên của ung thư, giai đoạn đặc trưng bằng sự tăng lên về kích thước của khối u do tăng trưởng của nhóm tế bào ung thư cư trú ở một nơi nào đó là giai đoạn nào?",
                options: [
                    "Giai đoạn lan tràn",
                    "Giai đoạn khởi phát",
                    "Giai đoạn thúc đẩy",
                    "Giai đoạn tiến triển"
                ],
               correctIndex: 3
            },
            {
                q: "Đâu không phải là đặc điểm của giai đoạn thúc đẩy",
                options: [
                    "Bành trướng đơn dòng có chọn lọc",
                    "Thay đổi biểu hiện gen",
                    "Tăng sinh tế bào khởi phát",
                    "Tiếp xúc với các chất sinh ung thư"
                ],
               correctIndex: 3
            },
            {
                q: "Có bao nhiêu giai đoạn tiến triển ung thư",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
               correctIndex: 2
            },
            {
                q: "Giai đoạn tiến triển của ung thư, ngoại trừ",
                options: [
                    "Giai đoạn ủ bệnh",
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn tiến triển"
                ],
               correctIndex: 0
            },
            {
                q: "Về giai đoạn khởi phát, câu nào sau đây sai",
                options: [
                    "Diễn biến nhanh",
                    "Có thể đảo ngược",
                    "Chưa xác định được ngưỡng khởi phát ý",
                    "A, C đúng"
                ],
               correctIndex: 1,
               keepOrder: true
            },
            {
                q: "Các con đường di căn của ung thư",
                options: [
                    "Đường máu",
                    "Đường bạch huyết",
                    "Đường kế cận",
                    "Tất cả đều đúng"
                ],
               correctIndex: 3
            },
            {
                q: "Quá trình xâm lấn của tế bào ung thư là nhờ",
                options: [
                    "Tính di động của tế bào ác tính",
                    "Khả năng tiêu đạm ở cấu trúc nâng đỡ của mô và cơ quan",
                    "Mất sự ức chế tiếp xúc của các tế bào",
                    "Cả A,B,C đều đúng"
                ],
               correctIndex: 3
            },
            {
                q: "Giai đoạn thứ 3 trong quá trình tiến triển tự nhiên của ung thư là",
                options: [
                    "Khởi phát",
                    "Thúc đẩy",
                    "Tăng trưởng",
                    "Chuyển biến"
                ],
               correctIndex: 1
            },
            {
                q: "Các giai đoạn tiến triển (xâm lấn di căn) đặc trưng bằng",
                options: [
                    "Sự tăng trưởng nhóm tế bào cư trú ở một mô nào đó đang bành trướng",
                    "Sự tăng lên về kích thước của khối u do tăng trưởng của một nhóm tế bào ung thư cư trú ở một nơi nào đó",
                    "Cho phép sự thâm nhập hay xuất hiện những ổ tế bào ung thư nhỏ",
                    "Thay đổi biểu hiện gen"
                ],
               correctIndex: 1
            },
            {
                q: "Vị trí hay di căn của ung thư",
                options: [
                    "Phổi",
                    "Cơ",
                    "Da",
                    "Tuyến ức"
                ],
               correctIndex: 0
            },
            {
                q: "Ung thư cơ quan nào hay di căn",
                options: [
                    "Cơ",
                    "Da",
                    "Phổi",
                    "Lách"
                ],
               correctIndex: 2
            },
            {
                q: "Di căn theo các đường nào, chọn ý sai",
                options: [
                    "Đường máu",
                    "Đường bạch huyết",
                    "Đường kế cận và mắc phải",
                    "Đường ăn uống"
                ],
               correctIndex: 3
            },
            {
                q: "Theo thứ tự thời gian quá trình tiến triển tự nhiên của ung thư trải qua bao nhiêu giai đoạn",
                options: [
                    "4 giai đoạn",
                    "6 giai đoạn",
                    "7 giai đoạn",
                    "5 giai đoạn"
                ],
               correctIndex: 1
            },
            {
                q: "Trong giai đoạn tiến triển, điều nào sau đây là đúng",
                options: [
                    "Các tế bào đột biến biểu hiện sự đáp ứng kém với môi trường và ưu thế tăng trưởng chọn lọc với tế bào bình thường và xung quanh",
                    "Giai đoạn tăng trưởng hay bành trướng chọn lọc dòng tế bào khởi phát có thể tiếp theo quá trình khởi phát và được tạo điều kiện với thay đổi vật lý của vi môi trường bình thường",
                    "Giai đoạn này biểu hiện đặc tính phục hồi kéo dài có thể trải qua nhiều bước và phụ thuộc vào ngưỡng của  tác nhân",
                    "Giai đoạn này đặc trưng bởi sự tăng trưởng nhóm tế bào cư trú ở một mô nào đó bành trướng"
                ],
               correctIndex: 0
            },
            {
                q: "Di căn theo các đường nào, chọn ý sai",
                options: [
                    "Đường máu",
                    "Đường bạch huyết",
                    "Đường kế cận và mắc phải",
                    "Đường ăn uống"
                ],
               correctIndex: 3
            },
            {
                q: "Giai đoạn 4 của quá trình tiến triển ung thư là",
                options: [
                    "GĐ tăng trưởng",
                    "GĐ thúc đẩy",
                    "GD lan tràn",
                    "GĐ tiến triển"
                ],
               correctIndex: 2
            },
            {
                q: "Tiến triển tự nhiên của ung thư có thể chia thành các giai đoạn chính là",
                options: [
                    "Giai đoạn tiền ung thư",
                    "Giai đoạn tiền lâm sàng",
                    "Giai đoạn tiền ung thư và tiền lâm sàng",
                    "Giai đoạn lâm sàng",
                    "Câu C, D đúng"
                ],
               correctIndex: 4,
               keepOrder: true
            },
            {
                q: "Đặc điểm của quá trình thúc đẩy gồm, ngoại trừ",
                options: [
                    "Thay đổi gen",
                    "Kéo dài",
                    "Tăng sinh tế bào",
                    "Không quan sát được"
                ],
               correctIndex: 3
            },
            {
                q: "Giai đoạn xâm lấn - di căn là giai đoạn nào",
                options: [
                    "Giai đoạn chuyển biến",
                    "Giai đoạn lan tràn",
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn tiến triển"
                ],
               correctIndex: 3
            },
            {
                q: "Giai đoạn nào có thể phát hiện khối u trên lâm sàng",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn lan tràn",
                    "Giai đoạn lan tràn, xâm lấn, di căn",
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biến"
                ],
               correctIndex: 2
            },
            {
                q: "Đặc điểm nào sau đay không phải của giai đoạn khởi phát",
                options: [
                    "Thời gian kéo dài",
                    "Mức độ tiếp xúc ở người rất khó tránh",
                    "Quá trình đột biến",
                    "Có tính tích tụ"
                ],
               correctIndex: 0
            },
            {
                q: "Đặc điểm dịch tễ của ung thư vú, chọn đáp án đúng nhất",
                options: [
                    "Tỉ lệ mắc ung thư vú ở nam giới chiếm khoảng 2% tổng số bệnh nhân ung thư vú",
                    "Tỉ lệ mắc ung thư vú ở nam giới chiếm khoảng 1% tổng số bệnh nhân ung thư vú",
                    "Chưa ghi nhận bệnh nhân ung thư vú ở nam giới",
                    "Bệnh nhân ung thư vú ở nam giới thường có mẹ hoặc chị em ruột bị ung thư vú"
                ],
               correctIndex: 1
            },
            {
                q: "Đặc điểm dịch tễ của ung thư vú, chọn đáp án đúng nhất",
                options: [
                    "Tỉ lệ mắc tương đương ở các lứa tuổi",
                    "Thường gặp ở tuổi trẻ hơn 40 tuổi",
                    "Tỷ lệ mắc nhanh hơn ở bệnh nhân trên 40 tuổi",
                    "Tỷ lệ mắc nhanh hơn ở bệnh nhân trên 50 tuổi"
                ],
               correctIndex: 0
            },
            {
                q: "Ý nào sau đây không đúng về giai đoạn thúc đẩy của ung thư",
                options: [
                    "Biểu hiện đặc tính phục hồi kéo dài có thể trải qua nhiều bước",
                    "Phụ thuộc vào ngưỡng của tác nhân",
                    "Mức độ tiếp xúc của con người với những tác nhân đẩy là giống nhau",
                    "Tất cả đáp án trên là đúng"
                ],
               correctIndex: 2
            },
            {
                q: "Ý nào sau đây đúng về giai đoạn khởi phát của ung thư",
                options: [
                    "Giai đoạn khởi phát bắt đầu thường là từ tế bào gốc",
                    "Diên biến rất nhanh",
                    "Không thể đảo ngược được",
                    "Tất cả ý trên đều là đúng"
                ],
               correctIndex: 3
            },
            {
                q: "Giai đoạn tiền ung thư chiếm bao nhiêu thời gian bệnh",
                options: [
                    "25%",
                    "50%",
                    "75%",
                    "90%"
                ],
               correctIndex: 2
            },
            {
                q: "Giai đoạn lâm sàng chiếm bao nhiêu thời gian bệnh",
                options: [
                    "25%",
                    "50%",
                    "75%",
                    "100%"
                ],
               correctIndex: 0
            },
            {
                q: "Quá trình xâm lấn là nhờ tế bào ung thư có các đặc tính sau",
                options: [
                    "Tính di động của các tế bào ung thư",
                    "Khả năng tiêu đạm ở cấu trúc nâng đỡ của mô và cơ quan",
                    "Mất sự ức chế tiếp xúc của các tế bào",
                    "Tất cả các ý trên đúng"
                ],
                correctIndex: 3
            },
                        {
                q: "vị trí cơ quan hay di căn",
                options: [
                    "Phổi",
                    "Cơ",
                    "Da",
                    "Lách"
                ],
                correctIndex: 0
            },
            {
                q: "Quá trình tiến triển ung thư, ngoại trừ",
                options: [
                    "Giai đoạn tiền ung thư chiếm ưu thế",
                    "Giai đoạn lâm sàng chiếm ưu thế",
                    "Giai đoạn tiền lâm sàng chiếm ưu thế",
                    "Giai đoạn lâm sàng chiếm 25% thời gian tiến triển của bệnh"
                ],
                correctIndex: 1
            },
            {
                q: "Giai đoạn biểu hiện đặc tính phục hồi, kéo dài có thể trải qua nhiều bước và phụ thuộc vào ngưỡng của tác nhân là đặc điểm của giai đọan nào của ung thư",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn thúc đẩy",
                    "Giai đoạn lan tràn",
                    "Giai đoạn chuyển biến"
                ],
                correctIndex: 1
            },
            {
                q: "Giai đoạn bao gồm quá trình xâm lấn và di căn là:",
                options: [
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn thúc đẩy",
                    "Giai đoạn lan tràn",
                    "Giai đoạn tiến triển"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình khởi phát của tế bào ung thư có đặc điểm nào?",
                options: [
                    "Bắt đầu bằng quá trình thay đổi gen",
                    "Thời gian kéo dài",
                    "Không thể hồi phục",
                    "Quan sát được đại thể"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư biểu mô hay di căn nhất theo con đường nào?",
                options: [
                    "Đường lân cận",
                    "Đường máu",
                    "Đường bạch huyết",
                    "Mắc phải"
                ],
                correctIndex: 2
            },
            {
                q: "Phân loại giai đoạn theo TNM có giá trị, trừ",
                options: [
                    "Lập kế hoạch điều trị",
                    "Đánh giá kết quả điều trị",
                    "Không giúp tiên lượng bệnh",
                    "Trao đổi thông tin giữa các trung tâm"
                ],
                correctIndex: 2
            },
            {
                q: "Tiêu chuẩn cần đạt được của test sàng lọc, trừ:",
                options: [
                    "Đơn giản, thích hợp",
                    "Giá thành thấp",
                    "Độ nhạy, độ đặc hiệu cao",
                    "Được bệnh nhân và cộng đồng chấp nhận"
                ],
                correctIndex: 2
            },
            {
                q: "Có bao nhiêu giai đoạn tiến triển K",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu giai đoạn tiến triển K",
                options: [
                    "7",
                    "8",
                    "Tùy từng loại K",
                    "6"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn lan tràn được đặc trưng bởi",
                options: [
                    "Sự tiến triển nhanh của một quần thể tế bào",
                    "Sự ngừng phân chia vô hạn độ của tế bào",
                    "Sự tăng trưởng của một nhóm tế bào gây bành trướng một mô nào đó",
                    "Cả 3 câu trên đều đúng"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn lan tràn thường diễn ra trong thời gian",
                options: [
                    "Chỉ vài tháng",
                    "Có thể vài năm",
                    "Có thể vài tháng hoặc vài năm",
                    "Vài giờ"
                ],
                correctIndex: 2
            },
            {
                q: "Gen có liên quan tới ung thư là, chọn ý sai",
                options: [
                    "Gen sinh ung thư",
                    "Gen đè nén bướu",
                    "Gen kích thích đột biến DNA",
                    "Gen sữa chữa DNA"
                ],
                correctIndex: 2
            },
            {
                q: "Sự di căn xa của bướu nguyên phát tùy thuộc vào sự tăng trưởng của bướu và ... của ung thư. Điền vào chỗ trống:",
                options: [
                    "độ biệt hóa",
                    "độ mô học",
                    "độ xâm lấn",
                    "độ di dộng"
                ],
                correctIndex: 0
            },
            {
                q: "Giai đoạn tiến triển bao gồm bao nhiêu quá trình?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 0
            },
            {
                q: "Giai đoạn tiền ung thư và tiền lâm sàng chiếm bao nhiêu % thời gian bệnh sử tự nhiên?",
                options: [
                    "75",
                    "80",
                    "85",
                    "90"
                ],
                correctIndex: 0
            },
                        {
                q: "Đâu là thứ tự quá trình tiến triển tự nhiên của ung thư:",
                options: [
                    "Khởi phát - tăng trưởng - thúc đẩy - chuyển biến - lan tràn - tiến triển",
                    "Khởi phát - thúc đẩy - tăng trưởng - chuyển biến - lan tràn - tiến triển",
                    "Khởi phát - tăng trưởng - thúc đẩy - chuyển biến - di căn - tiến triển",
                    "Khởi phát - tăng trưởng - thúc đẩy - chuyển biến - di căn - chết mòn"
                ],
                correctIndex: 0
            },
            {
                q: "Các cơ quan ít bị di căn là:",
                options: [
                    "Cơ, da, tuyến ức, não",
                    "Cơ, da, tuyến ức, phổi",
                    "Cơ, da, tuyến ức, xương",
                    "Cơ, da, tuyến ức, lách"
                ],
                correctIndex: 3
            },
            {
                q: "Đặc điểm của giai đoạn thúc đẩy là",
                options: [
                    "Có khả năng hồi phục",
                    "Không hồi phục",
                    "Có khả năng tích tụ",
                    "Không quan sát được"
                ],
                correctIndex: 0
            },
            {
                q: "Các cơ quan hay di căn K, ngoại trừ:",
                options: [
                    "Phổi",
                    "Gan",
                    "Lách",
                    "Não"
                ],
                correctIndex: 2
            },
            {
                q: "Sự lan rộng tại chỗ của u có thể bị giới hạn bởi :",
                options: [
                    "Xương",
                    "Sụn",
                    "Thanh mạc",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn thúc đẩy bao gồm:",
                options: [
                    "Sự thay đổi biểu hiện gen",
                    "Sự bành trướng đơn dòng có chọn lọc",
                    "Sự tăng sinh tế bào khởi phát",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Chọn câu sai: Tế bào ung thư di căn theo đường máu:",
                options: [
                    "Tế bào di căn kết thúc tại mao mạch và tăng trưởng",
                    "Số lượng tế bào di căn tỉ lệ nghịch với kích thước của khối u",
                    "Tế bào ung thư lan tràn vào hệ thống bạch mạch tại chỗ",
                    "Thưởng di căn từ gần đến xa"
                ],
                correctIndex: 0
            },
            {
                q: "Chọn đáp án sai",
                options: [
                    "Ung thư phát triển từ 1 tế bào",
                    "Ung thư là bệnh lý cấp tính",
                    "Thời gian của giai đoạn khởi phát diễn ra rất nhanh",
                    "Thời gian của giai đoạn thúc đẩy thường được kéo dài"
                ],
                correctIndex: 1
            },
            {
                q: "Đường di căn hay gặp nhất của Ung thư liên kết",
                options: [
                    "Theo đường máu",
                    "Theo đường bạch huyết",
                    "Theo đường kế cận",
                    "Dao mổ, đường kế cận"
                ],
                correctIndex: 0
            },
            {
                q: "Giai đoạn thứ 4 trong quá trình phát triển tự nhiên của ung thư là ?",
                options: [
                    "Tăng trường",
                    "Thúc đẩy",
                    "Lan toàn",
                    "Chuyển biến"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn thứ 2 trong quá trình phát triển tự nhiên của ung thư là",
                options: [
                    "Khởi phát",
                    "Thúc đẩy",
                    "Tăng trưởng",
                    "Chuyển biến"
                ],
                correctIndex: 2
            },
            {
                q: "Tiến triển của ung thư có mấy giai đoạn",
                options: [
                    "6",
                    "5",
                    "4",
                    "3"
                ],
                correctIndex: 0
            },
            {
                q: "Giai đoạn tiền ung thư và tiền lâm sàng chiếm .....",
                options: [
                    "75% thời gian",
                    "57% thời gian",
                    "25% thời gian",
                    "52% thời gian"
                ],
                correctIndex: 0
            },
            {
                q: "Có bao nhiêu giai đoạn tiến triển của ung thư:",
                options: [
                    "2",
                    "3",
                    "4",
                    "6"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn tiến triển nào bắt đầu từ tế bào gốc:",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn thúc đẩy",
                    "Giai đoạn chuyển biến"
                ],
                correctIndex: 0
            },
            {
                q: "Quá trình tiến triển tự nhiên của ung thư trải qua mấy giai đoạn:",
                options: [
                    "5",
                    "6",
                    "7",
                    "4"
                ],
                correctIndex: 1
            },
            {
                q: "Hút thuốc lá là nguyên nhân gây ra các loại ung thư chiếm tỷ lệ bao nhiêu",
                options: [
                    "20%",
                    "25%",
                    "30%",
                    "35%"
                ],
                correctIndex: 2
            },
            {
                q: "Phục hồi chức năng cho bệnh nhân ung thư nhằm cải thiện kết quả điều trị",
                options: [
                    "Phỏng bệnh bước 1",
                    "Phòng bệnh bước 2",
                    "Phòng bệnh bước 3",
                    "Phối hợp cả 3 phương pháp"
                ],
                correctIndex: 2
            },
            {
                q: "Đặc điểm “ không thể đảo ngược được” thuộc giai đoạn:",
                options: [
                    "Khởi phát",
                    "Tăng trưởng",
                    "Thúc đẩy",
                    "Chuyển biến"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư cơ quan nào hay di căn",
                options: [
                    "Cơ",
                    "Da",
                    "Phổi",
                    "Lách"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn tiền ung thư và giai đoạn tiền lâm sàng chiếm bao nhiêu thời gian bệnh",
                options: [
                    "Chiếm đa số thời gian bệnh",
                    "Chiếm 50%",
                    "Chiếm 75% tuỳ thuộc loại ung thư",
                    "Chiến 75%"
                ],
                correctIndex: 3
            },
            {
                q: "Phân loại giai đoạn theo TNM có giá trị, trừ",
                options: [
                    "Lập kế hoạch điều trị",
                    "Đánh giá kết quả điều trị",
                    "Không giúp tiên lượng bệnh"
                ],
                correctIndex: 2
            },
            {
                q: "Phân loại giai đoạn theo TNM có giá trị",
                options: [
                    "Lập kế hoạch điều trị",
                    "Đánh giá kết quả điều trị",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 2
            },
            {
                q: "Theo thứ tự thời gian quá trình tiến triển tự nhiên của ung thư trải qua mấy giai đoạn:",
                options: [
                    "5",
                    "4",
                    "6",
                    "3"
                ],
                correctIndex: 2
            },
            {
                q: "Cơ quan hay di căn, trừ:",
                options: [
                    "Phổi",
                    "Gan",
                    "Não",
                    "Tuyến ức"
                ],
                correctIndex: 3
            },
            {
                q: "Sự tiến triển tự nhiên theo thời gian của Ung thư 2 giai đoạn chính",
                options: [
                    "Giai đoạn tiền Ung thư chiếm 75% và giai đoạn tiền lâm sàng chiếm 25%",
                    "Giai đoạn tiền Ung thư chiếm 25% và giai đoạn tiền lâm sàng chiếm 75%",
                    "Giai đoạn tiền Ung thư chiếm 75 % và giai đoạn lâm sàng chiếm 25 %",
                    "Giai đoạn tiền Ung thư Tiền lâm sàng chiếm 25% và giai đoạn lâm sàng chiếm 75%"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn tăng trưởng là",
                options: [
                    "là giai đoạn bắt đầu thường là từ tế bào gốc, do tiếp xúc với chất sinh ung thư gây những đột biến",
                    "là giai đoạn bành trướng chọn lọc dòng tế bào khởi phát có thể tiếp theo quá trình khởi phát",
                    "là giai đoạn bao gồm sự thay đổi biểu hiện gen, sự bành trướng đơn dòng có chọn lọc",
                    "là giai đoạn đặc trưng bởi sự tăng trưởng nhóm tế bào cư trú ở một mô nào đó đang bành trướng"
                ],
                correctIndex: 1
            },
            {
                q: "Ở giai đoạn phát triển được đặc biệt bởi",
                options: [
                    "Tạm nghỉ phân chia của tế bào",
                    "Tăng kích thước của u",
                    "Các tế bào được nuôi dưỡng phát triển nhanh chóng",
                    "Các tế bào không cần mạch nuôi dưỡng"
                ],
                correctIndex: 1
            },
            {
                q: "Điền từ vào chỗ trống: “Giai đoạn lâm sàng, trên lâm sàng chỉ phát hiện khí khối u có kích thước trên ... cm3 (khoảng 1 tỷ tế bảo), cần phải có ... nhân đôi",
                options: [
                    "1 và 32",
                    "10 và 30",
                    "1 và 30",
                    "10 và 32"
                ],
                correctIndex: 2
            },
            {
                q: "Di căn theo các đường nào, chọn ý sai?",
                options: [
                    "Đường máu",
                    "Đường bạch huyết",
                    "Đường kế cận và mắc phải",
                    "Đường ăn uống"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn 4 của quá trình tiến triển ung thư là:",
                options: [
                    "GĐ tăng trưởng",
                    "GĐ thúc đẩy",
                    "GĐ lan tràn",
                    "GĐ tiến triển"
                ],
                correctIndex: 2
            },
            {
                q: "Các giai đoạn phát triển bệnh ung thư :",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biến",
                    "Giai đoạn di căn",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn nào? Các khối u xâm lấn đến các cơ quan khác trong cơ thể, phá huỷ các cơ quan này",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biển",
                    "Giai đoạn di căn",
                    "Giai đoạn tiến triển"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư phát triển qua mấy giai đoạn:",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn nào thì ung thư có thể xâm lấn:",
                options: [
                    "tiến triển",
                    "biển chuyển",
                    "lan tràn",
                    "tăng trưởng"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân gây ung thư phổi:",
                options: [
                    "EBV",
                    "Mỡ động vật",
                    "Phẩm nhuộm",
                    "Amiăng"
                ],
                correctIndex: 3
            },
            {
                q: "Tác động của tia phóng xạ gây ung thư ở người phụ thuộc vào:",
                options: [
                    "Tuổi thanh thiếu niên dễ bị ảnh hưởng hơn tuổi nhũ nhi do có tốc độ tăng trưởng nhanh hơn",
                    "Tất cả các cơ quan trọng cơ thể đều nhạy cảm với tia xạ",
                    "Mối liên hệ liều - đáp ứng",
                    "Nguồn xạ gây ung thư ở người chỉ có nguồn xạ nhân tạo"
                ],
                correctIndex: 2
            },
            {
                q: "Tiến triển tự nhiên của ung thư chia thành",
                options: [
                    "2 giai đoạn: tiền ung thư và tiền lâm sàng",
                    "2 giai đoạn: tiền ung thư và ung thư",
                    "3 giai đoạn: tiền ung thư, tiền lâm sàng, ung thư",
                    "3 giai đoạn: tiền lâm sàng, ung thư, cận lâm sàng ung thư"
                ],
                correctIndex: 0
            },
            {
                q: "Thứ tự thời gian quá trình tiến triển tự nhiên của ung thư trải qua",
                options: [
                    "4 giai đoạn",
                    "5 giai đoạn",
                    "6 giai đoạn",
                    "7 giai đoạn",
                ],
                correctIndex: 2
            },
            {
                q: "Đâu là đặc điểm của giai đoạn khởi phát",
                options: [
                    "Thay đổi gen",
                    "Khả năng hồi phục",
                    "Thời gian ngắn",
                    "Không tích tụ",
                ],
                correctIndex: 2
            },{
                q: "Thứ tự thời gian quá trình tiến triển tự nhiên của ung thư trải qua",
                options: [
                    "Vật lý",
                    "Hóa học",
                    "Sinh học",
                    "Tất cả"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn lâm sàng chiếm bao nhiêu % thời gian tiến triển tự nhiên",
                options: [
                    "30%",
                    "25%",
                    "35%",
                    "20%"
                ],
                correctIndex: 1
            },
            {
                q: "Sinh ra ung thư ở giai đoạn nào?",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn thúc đẩy",
                    "A và C"
                ],
                correctIndex: 3,
                keepOrder: true
            },
            {
                q: "có mấy giai đoạn tiến triển",
                options: [
                    "6",
                    "7",
                    "8",
                    "9"
                ],
                correctIndex: 0
            },
            {
                q: "giai đoạn lâm sàng chiếm bao nhiêu % thời gian tiến triển tự nhiên",
                options: [
                    "25",
                    "35",
                    "45",
                    "55"
                ],
                correctIndex: 0
            },
            {
                q: "Tiến trình tiến triển của ung thư trải qua mấy giai đoạn",
                options: [
                    "5",
                    "6",
                    "4",
                    "2"
                ],
                correctIndex: 1
            },
            {
                q: "Quá trình sinh bệnh ung thư liên quan chặt chẽ đến tổn thương 2 nhóm gen:",
                options: [
                    "Gen sửa chữa và gen ức chế khối u",
                    "Gen sinh ung thư và gen sửa chữa",
                    "Gen sinh ung thư và gen ức chế khối u",
                    "Gen sửa chữa và gen ức chế khối u"
                ],
                correctIndex: 2
            },
            {
                q: "Có bao nhiêu giai đoạn tiến triển ung thư theo giai đoạn",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn thứ 5 của quá trình tự nhiên của ung thư là:",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn chuyển biến",
                    "Giai đoạn tiến triển",
                    "Giai đoạn lan trên"
                ],
                correctIndex: 3
            },
            {
                q: "Tỷ lệ mắc bệnh toàn bộ dùng để:",
                options: [
                    "Đánh giá gánh nặng về bệnh tật của cộng đồng",
                    "Tính khoảng thời gian trung bình mà bệnh kéo dài",
                    "Số lượng người tử vong",
                    "Tỉ lệ mắc mới"
                ],
                correctIndex: 0
            },
            {
                q: "Dịch tễ học bao gồm:",
                options: [
                    "Dịch tễ học mô tả",
                    "Dịch tễ học phân tích",
                    "Dịch tễ học quan sát",
                    "A và B"
                ],
                correctIndex: 3,
                keepOrder: true
            },
            {
                q: "Quá trình xâm lấn là nhờ tế bào ung thư có những đặc tính, trừ:",
                options: [
                    "Tính di động của tế bào ác tính",
                    "Tính kết dính của tế bào ác tính với mô và cơ quan",
                    "Khả năng tiêu đạm ở cấu trúc nâng đỡ của mô và cơ quan",
                    "Mất sự ức chế tiếp xúc của các tế bào."
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư biểu mô hay di căn nhất theo con đường:",
                options: [
                    "Đường lân cận",
                    "Đường máu",
                    "Đường bạch huyết",
                    "Mắc phải"
                ],
                correctIndex: 2
            },
            {
                q: "Tế bào ung thư có những đặc tính nào sau đây, trừ:",
                options: [
                    "Tính di động của các tế bào ác tính",
                    "Khối u phát triển chậm",
                    "Khả năng tiêu đạm ở các cấu trúc nâng đỡ của mô và cơ quan",
                    "Mất ức chế tiếp xúc của các tế bào"
                ],
                correctIndex: 1
            },
            {
                q: "Giai đoạn thúc đẩy bao gồm đặc điểm nào, trời",
                options: [
                    "Sự thay đổi biểu hiện gen",
                    "Sự hành trưởng đơn dòng có chọn lọc",
                    "Sự xâm lấn",
                    "Sự tăng sinh tế bào khởi phát"
                ],
                correctIndex: 2
            },
            {
                q: "Chọn đáp án đúng nhất giai đoạn phát triển của bệnh ung thư gồm",
                options: [
                    "Khởi phát và xâm lấn di căn",
                    "Tăng trưởng và thúc đẩy",
                    "Chuyển biển và lan tràn",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Đặc điểm của giai đoạn khởi phát ung thư:",
                options: [
                    "Sự bành trưởng đơn dòng có chọn lọc",
                    "Sự tăng trưởng nhóm tế bào cư trú ở một mô nào đó đang bành trướng",
                    "Di động của các tế bào ác tinh",
                    "Từ tế bào gốc tiếp xúc với chất ung thư gây ra những đột biến làm thay đổi không hồi phục của nhân tế bào"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình khởi phát của tế bào ung thư có đặc điểm nào?",
                options: [
                    "Bắt đầu bằng quá trình thay đổi gen",
                    "Thời gian kéo dài",
                    "Không thể hồi phục",
                    "Quan sát được đại thể"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư biểu mô hay di căn nhất theo con đường nào?",
                options: [
                    "Đường lân cận",
                    "Đường máu",
                    "Đường bạch huyết",
                    "Mắc phải"
                ],
                correctIndex: 2
            },
            {
                q: "Cơ quan hay đi căn nhất của Ung thư",
                options: [
                    "Gan",
                    "Cơ",
                    "Phổi",
                    "Lách"
                ],
                correctIndex: 2
            },
            {
                q: "Sau khi tế bào bị khởi phát thành tế bào ung thư, các tế bào sẽ (chọn câu sai)",
                options: [
                    "Tăng sinh các dòng TB bị khởi phát",
                    "Tạm nghỉ sau đó sẽ phát triển lan tràn",
                    "Xâm nhập vào mô",
                    "Hình thành các ổ nhỏ TB ung thư"
                ],
                correctIndex: 1
            },
            {
                q: "Vị trí ung thư ít di căn là:",
                options: [
                    "xương",
                    "lách",
                    "não",
                    "gan"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư biểu mô hay di căn nhất theo con đường nào?",
                options: [
                    "Đường lân cận",
                    "Mắc phải",
                    "Đường máu",
                    "Đường bạch huyết"
                ],
                correctIndex: 3
            },
            {
                q: "Các giai đoạn phát triển tự nhiên của bệnh ung thư gồm, trừ:",
                options: [
                    "Khởi phát",
                    "Thúc đẩy",
                    "Tăng trưởng",
                    "Biệt hóa"
                ],
                correctIndex: 3
            },
            {
                q: "Những con đường di căn của bệnh ung thư",
                options: [
                    "Đường bạch huyết",
                    "Đường máu",
                    "Đường kể cận và mắc phải",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình xâm lấn tế bào ung thư có đặc tính . Đáp án sai",
                options: [
                    "Tỉnh đi động tb ác tính",
                    "Khả năng tiêu đạm ở cấu trúc nâng đỡ của mô và cơ",
                    "Mất sự ức chế tiếp xúc của các tế bào",
                    "Di căn tế bào"
                ],
                correctIndex: 3
            },
            {
                q: "Cơ quan ít đi căn: cơ, da, tuyến ức, lách?",
                options: [
                    "Đúng",
                    "Sai"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ quan hay di căn nhất là",
                options: [
                    "Phổi, tủy, xương",
                    "Phổi, gan, não, xương",
                    "Gan, tuyến tiền liệt, phổi",
                    "Tuyến tiền liệt, gan, não"
                ],
                correctIndex: 1
            },
            {
                q: "Cơ quan ít di căn nhất là",
                options: [
                    "Phổi, gan, não, xương",
                    "Gan, não, xương",
                    "Cơ, da, tuyến ức, lách",
                    "Cơ, da, phổi"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn nào được gọi là giai đoạn bành trướng ?",
                options: [
                    "Khởi phát",
                    "Tiến triển",
                    "Thúc đẩy",
                    "Tăng trưởng"
                ],
                correctIndex: 3
            },
            {
                q: "Cơ quan ít đi căn là:",
                options: [
                    "Lách",
                    "Phổi",
                    "Não",
                    "Gan"
                ],
                correctIndex: 0
            },
            {
                q: "Trong giai đoạn lan tràn của ung thư tế bào tăng sinh:",
                options: [
                    "Từ 1000 -1.000.000 tế bào",
                    "Từ 2000 -1.000.000 tế bào",
                    "Từ 3000 -1.000.000 tế bào",
                    "Từ 4000 -1.000.000 tế bào"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ quan hay di căn là:",
                options: [
                    "Phổi",
                    "Cơ",
                    "Da",
                    "Lách"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư có bao nhiêu giai đoạn phát triển",
                options: [
                    "7 giai đoạn",
                    "6 giai đoạn",
                    "5 giai đoạn",
                    "4 giai đoạn"
                ],
                correctIndex: 1
            },
            {
                q: "Các giai đoạn phát triển của ung thư. Chọn đáp án sai",
                options: [
                    "Giai đoạn tăng trưởng",
                    "Giai đoạn tăng kích thước",
                    "Giai đoạn lan tràn",
                    "Giai đoạn chuyển biến"
                ],
                correctIndex: 1
            },
            {
                q: "Vị trí ung thư ít di căn là:",
                options: [
                    "phổi",
                    "gan",
                    "não",
                    "lách"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn thúc đẩy gồm:",
                options: [
                    "sự thay đổi biểu hiện gen",
                    "sự bành trưởng đơn dòng có chọn lọc",
                    "sự tăng sinh tế bào khởi phát",
                    "cả 3 đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình tiến triển tự nhiên của ung thư trải qua mấy giai đoạn:",
                options: [
                    "5",
                    "6",
                    "7",
                    "4"
                ],
                correctIndex: 1
            },
            {
                q: "Giai đoạn ung thư lâm sàng ?",
                options: [
                    "Chiếm 25% thời gian tiến triển tự nhiên với sự xuất hiện các triệu chứng lâm sàng",
                    "Chiếm 75% thời gian tiến triển tự nhiên với sự xuất hiện các triệu chứng lâm sàng",
                    "Chiếm 25% thời gian bệnh sử tự nhiên với 30 lần nhân đôi tế bào đạt số lượng 10^9 tế bào",
                    "Chiếm 75% thời gian bệnh sử tự nhiên với 30 lần nhân đôi tế bào đạt số lượng 10^9 tế bào"
                ],
                correctIndex: 0
            },
            {
                q: "loại ung thư nào dưới đây không liên quan đến ăn uống:",
                options: [
                    "ung thư đại tràng",
                    "ung thư vú",
                    "bệnh bạch cầu",
                    "ung thư khoang miệng"
                ],
                correctIndex: 2
            },
            {
                q: "Nitrosamin là một chất gây ung thư thực nghiệm, thường được thấy trong loại thức ăn sau:",
                options: [
                    "Thịt nướng",
                    "Mỡ động vật",
                    "Cả muối",
                    "Lạc mốc"
                ],
                correctIndex: 2
            },
            {
                q: "Cơ quan hay di căn, ngoại trừ:",
                options: [
                    "Phổi",
                    "Não",
                    "Gan",
                    "Lách"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư di căn theo con đường:",
                options: [
                    "Đường máu",
                    "Đường bạch huyết",
                    "Đường kế cận và mắc phải",
                    "Cả 3 con đường trên"
                ],
                correctIndex: 3
            },
            {
                q: "có mấy giai đoạn tiến triển",
                options: [
                    "6",
                    "7",
                    "8",
                    "9"
                ],
                correctIndex: 0
            },
            {
                q: "giai đoạn lâm sàng chiếm bao nhiêu % thời gian tiến triển tự nhiên",
                options: [
                    "25",
                    "35",
                    "45",
                    "55"
                ],
                correctIndex: 0
            },
            {
                q: "Đâu không phải là đặc điểm của giai đoạn thúc đẩy:",
                options: [
                    "Bành trướng đơn dòng có chọn lọc",
                    "Thay đổi biểu hiện gen",
                    "Tăng sinh tế bào khởi phát",
                    "Tiếp xúc với chất sinh ung thư"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn khởi phát ung thư, câu nào sau đây sai",
                options: [
                    "Diễn biến nhanh",
                    "Có thể đảo ngược",
                    "Chưa xác định được ngưỡng khởi phát ý",
                    "A, C đúng"
                ],
                correctIndex: 1,
                keepOrder: true
            },
            {
                q: "Cơ chế bệnh sinh của ung thư liên quan đến ?",
                options: [
                    "Cấu trúc phân tử của tế bào",
                    "Chức năng của bảo quan trong tế bào",
                    "Đột biến số lượng nhiễm sắc thể",
                    "Đột biến cấu trúc nhiễm sắc thể"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ quan ít di căn ?",
                options: [
                    "Cơ",
                    "Não",
                    "Gan",
                    "Xương"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư phát triển qua mấy giai đoạn:",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn lan tràn thường diễn ra trong thời gian",
                options: [
                    "Chỉ vài ngày",
                    "Vài tháng",
                    "Vài năm",
                    "Có thể vài tháng hoặc vài năm"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                       Bài 4. Nguyên nhân ung thư
    // =========================================================================
    {
        title: "Bài 4. Nguyên nhân ung thư",
        questions: [
            {
                q: "Thuốc lá là nguyên nhân hàng đầu gây ra bệnh ?",
                options: [
                    "Ung thư phế quản",
                    "Ung thư tuyến giáp",
                    "Ung thư đại tràng",
                    "Ung thư gan"
                ],
                correctIndex: 0
            },
                        {
                q: "Người hút thuốc lá có nguy cơ mắc ung thư phế quản gấp mấy lần người không hút?",
                options: [
                    "10",
                    "20",
                    "30",
                    "40"
                ],
                correctIndex: 0
            },
            {
                q: "Tìm ra đâu không phải là nguyên nhân bên trong gây ung thư",
                options: [
                    "Di truyền",
                    "Nội tiết",
                    "Virus",
                    "Suy giảm miễn dịch"
                ],
                correctIndex: 2
            },
            {
                q: "ung thư nào sau đây không liên quan đến yếu tố nội tiết",
                options: [
                    "Ung thư vú",
                    "Ung thư gan",
                    "Ung thư nội mạc tử cung",
                    "Ung thư tuyến tiền liệt"
                ],
                correctIndex: 1
            },
            {
                q: "Các chất gây ung thư chứa trong thực phẩm, thức ăn:",
                options: [
                    "Các hợp chất N-Nitroso",
                    "Aflatoxin",
                    "Benzopyrene",
                    "Tất cả đáp án trên đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Sợi asbestos (ở người thợ hút bụi amiang) là nguyên nhân chính gây ung thư nào:",
                options: [
                    "Ung thư bàng quang",
                    "Bệnh đa u tuỷ xương",
                    "Ung thư trung mô màng phổi",
                    "U lympho ác tính"
                ],
                correctIndex: 2
            },
            {
                q: "Thuốc lá gây ung thư là do trong khói thuốc có thành phần nào",
                options: [
                    "Kim loại nặng",
                    "Hidrocacbon",
                    "Aflatoxin",
                    "Nitrosamin"
                ],
                correctIndex: 1
            },
            {
                q: "Tác nhân có thể gây ung thư bàng quang:",
                options: [
                    "Nitrosamine",
                    "Aflatoxin",
                    "EBV",
                    "Thuốc lá"
                ],
                correctIndex: 3
            },
            {
                q: "ung thư nguyên phát buồng trứng tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "100",
                    "24",
                    "130",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "ung thư nguyên phát đa u tủy xương tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "210",
                    "100",
                    "24",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư da do nguyên nhân nào là chủ yếu",
                options: [
                    "Bức xạ tia cực tím",
                    "Do di truyền",
                    "Do nhiễm virus",
                    "Không có nguyên nhân"
                ],
                correctIndex: 0
            },
            {
                q: "ung thư cổ tử cung liên quan vi rút nào",
                options: [
                    "HPV",
                    "viêm gan B",
                    "herpes",
                    "Không có đáp án đúng"
                ],
                correctIndex: 0
            },
            {
                q: "tia X có thể gây ra các bệnh ung thư sau:",
                options: [
                    "Ung thư phổi, ung thư da",
                    "Ung thư vú, ung thư xương",
                    "Ung thư xương, bệnh bạch cầu cấp",
                    "Ung thư da, bệnh bạch cầu cấp"
                ],
                correctIndex: 3
            },
            {
                q: "Những cơ quan nhạy cảm nhất với tia phóng xạ.",
                options: [
                    "Não, xương",
                    "Tim, gan",
                    "Tuyến giáp, tủy xương",
                    "Dạ dày, thận"
                ],
                correctIndex: 2
            },
            {
                q: "Những loại virus sinh ung thư gồm:",
                options: [
                    "Virus Epstein-Barr",
                    "Virus viêm gan B",
                    "Virus gây u nhú ở người (HPV)",
                    "Cả A, B, C đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Các nhóm tác nhân chính gây ra bệnh ung thư gồm:",
                options: [
                    "Tác nhân hóa học",
                    "Tác nhân vật lý",
                    "Tác nhân sinh học",
                    "Cả A, B, C đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Về tác nhân dinh dưỡng. Chọn ý sai?",
                options: [
                    "Khẩu phần bữa ăn đóng một vai trò quan trọng trong gây bệnh ung thư",
                    "Aflatoxin là một chất gây ra bệnh ung thư gan",
                    "Ung thư vú không liên quan đến tác nhân dinh dưỡng",
                    "Các chất đóng vai trò làm giảm nguy cơ sinh ung thư: vitamin, chất xơ"
                ],
                correctIndex: 2
            },
            {
                q: "Virus Epstein Barr (EBV) có thể là nguyên nhân gây ung thư",
                options: [
                    "Phổi",
                    "Đại tràng",
                    "Vòm họng",
                    "Cổ tử cung"
                ],
                correctIndex: 2
            },
            {
                q: "Chọn đáp án đúng nhất:",
                options: [
                    "Nguy cơ ung thư giảm khi bỏ hút thuốc lá",
                    "Chế độ ăn nhiều mỡ, ít rau tăng nguy cơ ung thư đại tràng",
                    "Ăn nhiều đồ nướng, đồ muối tăng nguy cơ gây ung thư",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Virus HPV liên quan đến bệnh nào?",
                options: [
                    "Ung thu gan",
                    "Ung thư phổi",
                    "Ung thư cổ tử cung",
                    "Ung thư hắc tổ"
                ],
                correctIndex: 2
            },
            {
                q: "Đâu KHÔNG PHẢI là tác nhân hóa học gây K ?",
                options: [
                    "Bức xạ ion hóa",
                    "Thuốc lá",
                    "Dinh dưỡng",
                    "Cȧ A,B,C"
                ],
                correctIndex: 0
            },
            {
                q: "Chất nào dưới đây gây ung thư?",
                options: [
                    "Nitrosamin",
                    "Aflatoxin",
                    "Paradimethyl Amino Benzen",
                    "Cả A,B,C"
                ],
                correctIndex: 3
            },
            {
                q: "tác nhân vật lý gồm:",
                options: [
                    "bức xạ ion hóa",
                    "thuốc lá",
                    "dinh dưỡng",
                    "virus sinh ung thư"
                ],
                correctIndex: 0
            },
            {
                q: "yếu tố di truyền và suy giảm miễn dịch",
                options: [
                    "bệnh da có nguồn gốc gen",
                    "virus gây u nhú ở người",
                    "người hút thuốc",
                    "ăn trầu"
                ],
                correctIndex: 0
            },
            {
                q: "Nitrosamin là chất gây ung thư có bản chất là tác nhân:",
                options: [
                    "Hóa học",
                    "Vật lý",
                    "Sinh học",
                    "Yếu tố di truyền"
                ],
                correctIndex: 0
            },
            {
                q: "Có mấy nhóm nguyên nhân có thể gây ra ung thư ?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 3
            },
            {
                q: "Aflatoxin, 1 trong những chất gây ung thư có nguồn gốc từ:",
                options: [
                    "Khỏi thuốc lá",
                    "Nấm men",
                    "Mỡ động vật",
                    "Nguồn nước nhiễm bẩn"
                ],
                correctIndex: 1
            },
            {
                q: "Thuốc lá là nguyên nhân hàng đầu gây nên loại ung thư nào sau đây.",
                options: [
                    "Ung thư dạ dày",
                    "Ung thư bàng quang",
                    "Ung thư phế quản",
                    "Ung thư vòm họng"
                ],
                correctIndex: 2
            },
            {
                q: "Tác nhân vật lý gây K:",
                options: [
                    "Bức xạ ion hóa.",
                    "Thuốc lá",
                    "Thịt đỏ",
                    "Virut"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân chính gây ung thư",
                options: [
                    "Vật lý",
                    "Hoa Học",
                    "Sinh học",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "các tác nhân gây ung thư bao gồm:",
                options: [
                    "tác nhân vật lý",
                    "tác nhân hóa học",
                    "tác nhân sinh học",
                    "yếu tố di truyền",
                    "tất cả đáp án trên đều đúng"
                ],
                correctIndex: 4
            },
            {
                q: "bức xạ tia cực tím là tác nhân chủ yếu gây nên ung thư:",
                options: [
                    "ung thư tuyến tiền liệt",
                    "ung thư da",
                    "ung thư phổi",
                    "ung thư buồng trứng"
                ],
                correctIndex: 1
            },
            {
                q: "Sợi asbestos (ở người thợ hút bụi amiang) là nguyên nhân chính gây ung thư nào:",
                options: [
                    "Ung thư bàng quang",
                    "Bệnh đa u tuỷ xương",
                    "Ung thư trung mô màng phổi",
                    "U lympho ác tính"
                ],
                correctIndex: 2
            },
            {
                q: "Thuốc lá là nguyên nhân gây ung thư phế quản chiếm bao nhiêu phần trăm",
                options: [
                    "90",
                    "95",
                    "97",
                    "99"
                ],
                correctIndex: 0
            },
            {
                q: "Thuốc lá có thể gây ra các loại ung thư, trừ:",
                options: [
                    "Phế quản-phổi",
                    "Khoang miệng",
                    "Xương",
                    "Tiết niệu"
                ],
                correctIndex: 2
            },
            {
                q: "Nitrosamine là chất gây ung thư có bản chất là tác nhân:",
                options: [
                    "Hoá học",
                    "Vật lý",
                    "Sinh học",
                    "Yếu tố di truyền"
                ],
                correctIndex: 0
            },
            {
                q: "Biến đổi ngoại di truyền trong quá trình methyl hóa DNA thường liên quan đến",
                options: [
                    "ung thư ruột kết",
                    "ung thư nguyên bào lympho ở trẻ em",
                    "ung thư vòm họng",
                    "u não"
                ],
                correctIndex: 0
            },
            {
                q: "Các sai hỏng dẫn đến ung thư thường có khả năng khuếch đại và cộng gộp với nhau, trừ:",
                options: [
                    "đột biến ở hệ thống kiểm soát lỗi của tế bào có thể khiến nó và đời sau tích lũy thêm nhiều đột biến khác",
                    "đột biến ở bộ máy thu nhận có thể gây lỗi đến tế bào khác",
                    "đột biến ở gen sinh ung thư có thể khiến tế bào tăng sinh với tốc độ và tần suất lớn hơn",
                    "Đột biến làm bất hoạt gen ức chế khối u"
                ],
                correctIndex: 1
            },
            {
                q: "Tác nhân chủ yếu gây ung thư da",
                options: [
                    "Tia cực tím",
                    "Tia hồng ngoại",
                    "Tia bức xạ",
                    "Tia Xquang"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân gây ung thư dạ dày:",
                options: [
                    "Nitrosamine",
                    "EBV",
                    "3-4 benzopyren",
                    "HBV"
                ],
                correctIndex: 0
            },
            {
                q: "Đâu là tác nhân vật lý gây ung thư",
                options: [
                    "Thuốc lá",
                    "Bức xạ cực tím",
                    "Dinh dưỡng",
                    "Thuốc"
                ],
                correctIndex: 1
            },
            {
                q: "Virut nào gây ung thư gan nguyên phát",
                options: [
                    "Virut Epstein Barr",
                    "Virut viêm gan A",
                    "Virut viêm gan B",
                    "Virut viêm gan C"
                ],
                correctIndex: 2
            },
            {
                q: "Tác nhân gây ung thư đại trực tràng:",
                options: [
                    "Aflatoxin",
                    "Thuốc lá",
                    "Mỡ động vật",
                    "EBV"
                ],
                correctIndex: 2
            },
            {
                q: "các chất ung thư chứa trong thực phẩm, thức ăn",
                options: [
                    "nitrosamin",
                    "aflatoxin",
                    "benzopyrene",
                    "tất cả đáp án trên đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Gen p53 gây là nguyên nhân gây ra ung thư nào dưới đây ?",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư vòm họng",
                    "Ung thư buồng trứng",
                    "U lympho"
                ],
                correctIndex: 0
            },
            {
                q: "Đặc tính nào sau đây có ở tế bào ung thư:",
                options: [
                    "Tăng kích thước tế bào",
                    "Giảm tỉ lệ nhân so với bào tương",
                    "Tăng ức chế tiếp xúc",
                    "Tăng kích thước nhân"
                ],
                correctIndex: 0
            },
            {
                q: "Bức xạ cực tím chủ yếu gây ra ung thư ở đâu?",
                options: [
                    "Tuyến giáp",
                    "Phổi",
                    "Xương",
                    "Da"
                ],
                correctIndex: 3
            },
            {
                q: "Về tác nhân dinh dưỡng. Chọn ý sai?",
                options: [
                    "Khẩu phần bữa ăn đóng một vai trò quan trọng trong gây bệnh ung thư",
                    "Aflatoxin là một chất gây ra bệnh ung thư gan",
                    "Ung thư vú không liên quan đến tác nhân dinh dưỡng",
                    "Các chất đóng vai trò làm giảm nguy cơ sinh ung thư: vitamin, chất xơ"
                ],
                correctIndex: 2
            },
            {
                q: "Bức xạ ion hóa gây ung thư cao nhất ở đâu?",
                options: [
                    "Tuyến giáp",
                    "Phổi",
                    "Xương",
                    "Da"
                ],
                correctIndex: 0
            },
            {
                q: "Nitrosamine là chất gây ung thư có bản chất là tác nhân:",
                options: [
                    "Sinh học",
                    "Vật lý",
                    "Hóa học",
                    "Yếu tố di truyền"
                ],
                correctIndex: 2
            },
            {
                q: "Các nguyên nhân bên trong gây ung thư là:",
                options: [
                    "Di truyền, sinh học, hoá học, vật lý",
                    "Nội tiết, sinh học, hoá học, vật lý",
                    "Di truyền, nội tiết",
                    "Di truyền, nội tiết, vật lý, hoá học, sinh học"
                ],
                correctIndex: 2
            },
            {
                q: "Tác nhân vật lý gây ung thư là:",
                options: [
                    "pH",
                    "Uranium",
                    "Nicotine",
                    "3-4 Benzopyren"
                ],
                correctIndex: 1
            },
            {
                q: "Khuynh hướng săn sóc sức khỏe cộng đồng nhằm:",
                options: [
                    "Nâng cao tỷ lệ điều trị",
                    "Phát hiện sớm ung thư",
                    "Hạ thấp tỷ lệ mắc bệnh",
                    "Tìm nguyên nhân"
                ],
                correctIndex: 2
            },
            {
                q: "Có bao nhiêu nhóm tác nhân chính gây ung thư:",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 2
            },
            {
                q: "Nguyên nhân gây ung thư gây ung thư cổ tử cung, âm đạo, âm hộ có thể là ... (điền vào chỗ trống)",
                options: [
                    "VR Epstein-Barr",
                    "Virus viêm gan B (HBV)",
                    "Virus gây u nhú ở người HPV",
                    "Virus HTLV"
                ],
                correctIndex: 2
            },
            {
                q: "Virus Epstein Barr (EBV) có thể là nguyên nhân gây ung thư",
                options: [
                    "Phổi",
                    "Đại tràng",
                    "Vòm họng",
                    "Cổ tử cung"
                ],
                correctIndex: 2
            },
            {
                q: "Độc tố nào sau đây thường gây ung thư gan:",
                options: [
                    "Aflatoxin",
                    "Nitrosamine",
                    "Hợp chất N-nitroso",
                    "Các chất trong trầu khi nhai"
                ],
                correctIndex: 0
            },
            {
                q: "Phơi nhiễm bức xạ ion hóa có thể gây nên:",
                options: [
                    "Ung thư vú",
                    "Bệnh bạch cầu",
                    "Ung thư tuyến giáp",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu nhóm tác nhân chính gây ung thư?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctIndex: 0
            },
            {
                q: "Có mấy loại virus liên quan đến bệnh ung thư?",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                correctIndex: 0
            },
            {
                q: "Nitrosamine là chất gây ung thư liên quan đến cơ quan nào:",
                options: [
                    "Vòm mũi họng",
                    "Tiêu hóa",
                    "cơ xương khớp",
                    "tiết niệu"
                ],
                correctIndex: 0
            },
            {
                q: "Aflatoxin sinh ra từ nấm mốc Aspergillus flavus là chất gây ra ung thư nào:",
                options: [
                    "Ung thư phổi",
                    "Ung thư gan",
                    "Ung thư cổ tử cung",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 1
            },
            {
                q: "Các nhóm tác nhân chính gây ra bệnh ung thư gồm:",
                options: [
                    "Tác nhân hóa học",
                    "Tác nhân vật lý",
                    "Tác nhân sinh học",
                    "Cả A, B, C đều đúng"
                ],
                correctIndex: 3,
                keepOrder: true
            },
            {
                q: "Có bao nhiêu virus liên quan đến bệnh ung thư",
                options: [
                    "4",
                    "3",
                    "7",
                    "9"
                ],
                correctIndex: 0
            },
            {
                q: "Những nguyên nhân nào có thể gây ung thư ?",
                options: [
                    "Bức xạ",
                    "HPV",
                    "Nitrosamin",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Bức xạ cực tím chủ yếu gây ung thư gì?",
                options: [
                    "Ung thư tuyến giáp",
                    "Ung thư bạch cầu",
                    "Ung thư da",
                    "Ung thư vòm họng"
                ],
                correctIndex: 2
            },
            {
                q: "các loại vitamin A, C, E làm giảm nguy cơ một số bệnh ung thư như:",
                options: [
                    "K biểu mô",
                    "K dạ dày",
                    "K thực quản",
                    "K gan"
                ],
                correctIndex: 3
            },
            {
                q: "ung thư nào sau đây không liên quan đến nội tiết",
                options: [
                    "ung thư vú",
                    "ung thư phổi",
                    "ung thư tuyến tiền liệt",
                    "ung thư nội mạc"
                ],
                correctIndex: 1
            },
            {
                q: "Sử dụng thuốc Tamoxifen trong 5 năm, có thể làm giảm ... ung thư ở phụ nữ có nguy cơ cao",
                options: [
                    "20%",
                    "30%",
                    "40%",
                    "50%"
                ],
                correctIndex: 3
            },
            {
                q: "Những tác nhân có thể gây ra Ung thư Vòm là:",
                options: [
                    "Uranium",
                    "Nitrosamin",
                    "Aflatoxin",
                    "Benzopyren"
                ],
                correctIndex: 1
            },
            {
                q: "Những tác nhân gây Ung thư Gan, Ngoại trừ:",
                options: [
                    "Aflatoxin",
                    "Virut Viêm Gan B",
                    "Paradimethyl Amino Benzen",
                    "Uranium"
                ],
                correctIndex: 3
            },
            {
                q: "Virut nào dưới đây có liên quan đến ung thư?",
                options: [
                    "VR Epstein-Barr",
                    "VR viêm gan B",
                    "HPV",
                    "Cả A, B, C"
                ],
                correctIndex: 3
            },
            {
                q: "Kí sinh trùng nào dưới đây được coi là nguyên nhân gây K",
                options: [
                    "Sán Schistosoma",
                    "Trichuris trichiura",
                    "Ascariasis",
                    "Strongyloides stercoralis"
                ],
                correctIndex: 0
            },
            {
                q: "Nguyên nhân chính ung thư phế quản",
                options: [
                    "Hút thuốc lá",
                    "Viêm phổi",
                    "Ăn trầu",
                    "Hút thuốc lào"
                ],
                correctIndex: 0
            },
            {
                q: "Có mấy loại virut liên quan đến bệnh ung thư",
                options: [
                    "4",
                    "5",
                    "6",
                    "2"
                ],
                correctIndex: 0
            },
            {
                q: "Có bao nhiêu tác nhân vật lý gây ung thư:",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 1
            },
            {
                q: "Có bao nhiêu loại virus liên quan đến bệnh ung thư:",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 2
            },
            {
                q: "Thuốc lá gây ung thư là do trong khói thuốc có thành phần nào",
                options: [
                    "Kim loại nặng",
                    "Hidrocacbon",
                    "Aflatoxin",
                    "Nitrosamin"
                ],
                correctIndex: 1
            },
            {
                q: "Tác nhân hóa học gây ung thư là:",
                options: [
                    "Thuốc lá",
                    "Dinh dưỡng",
                    "Tác nhân nghề nghiệp",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Nhiều loại ung thư có liên quan đến dinh dưỡng, trừ:",
                options: [
                    "Ung thư thực quản",
                    "Ung thư gan",
                    "Ung thư xương",
                    "Ung thư vòm mũi họng"
                ],
                correctIndex: 2
            },
            {
                q: "phải điều trị thay thế estrogen làm tăng nguy cơ bị ung thư gì",
                options: [
                    "Ung thư cổ tử cung",
                    "Ung thư buồng trứng",
                    "Ung thư nội mạc tử cung",
                    "Ung thư âm đạo"
                ],
                correctIndex: 2
            },
            {
                q: "Những nguyên nhân nào có thể gây ung thư ?",
                options: [
                    "Bức xạ",
                    "HPV",
                    "Nitrosamin",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Hoá chất tiêu biểu gây Đa u tủy xương là?",
                options: [
                    "Melphatan",
                    "Cyclophosphamide",
                    "Phenacetin",
                    "Alkylant."
                ],
                correctIndex: 3
            },
            {
                q: "Bức xạ cực tím chủ yếu gây ra ung thư ở đâu?",
                options: [
                    "Tuyến giáp",
                    "Phổi",
                    "Xương",
                    "Da"
                ],
                correctIndex: 3
            },
            {
                q: "Những loại virus sinh ung thư gồm:",
                options: [
                    "Virus Epstein-Barr",
                    "Virus viêm gan B",
                    "Virus gây u nhú ở người (HPV)",
                    "Cả A, B, C đều đúng"
                ],
                correctIndex: 3,
                keepOrder: true
            },
            {
                q: "Aflatoxin sinh ra từ nấm mốc Aspergillus flavus, là 1 chất gây ra bệnh",
                options: [
                    "Ung thư gan",
                    "Ung thư phổi",
                    "Ung thư vú",
                    "Ung thư da"
                ],
                correctIndex: 0
            },
            {
                q: "Chất Paradimethyl Amino Benzen dùng để nhuộm bơ thành “bơ vàng” có khả năng:",
                options: [
                    "Ung thư gan",
                    "Ung thư phổi",
                    "Ung thư vú",
                    "Ung thư da"
                ],
                correctIndex: 0
            },
            {
                q: "Tác động của tia phóng xạ gây ung thư ở người phụ thuộc vào yếu tố nào sau đây",
                options: [
                    "Tuổi tiếp xúc",
                    "Mối liên hệ liều - đáp ứng",
                    "Cơ quan bị chiếu xạ",
                    "Tất cả các đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Dinh dưỡng chiếm bao nhiêu % trong các nguyên nhân gây bệnh K?",
                options: [
                    "25 %",
                    "35%",
                    "45%",
                    "55%"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư là bệnh lý ác tính của tế bào mà tế bào tăng sinh vô hạn độ bên ngoài ... của cơ thể",
                options: [
                    "End end",
                    "Ổn định",
                    "Phát triển",
                    "Kiểm soát"
                ],
                correctIndex: 3
            },
            {
                q: "Tế bào bình thường khi đang phát triển ở phân chia nếu tiếp xúc với tế bào bình thường cũng đang phân bào thì quá trình phân bào",
                options: [
                    "Chấm dứt",
                    "Next",
                    "Được đưa ra",
                    "Bị ức chế"
                ],
                correctIndex: 0
            },
            {
                q: "Có bao nhiêu virus liên quan đến bệnh ung thư?",
                options: [
                    "4",
                    "3",
                    "7",
                    "9"
                ],
                correctIndex: 0
            },
            {
                q: "nguyên nhân virus nào thường gặp gây ung thư biểu mô vòm họng",
                options: [
                    "EBV",
                    "HTLV 1",
                    "HBV",
                    "HCV"
                ],
                correctIndex: 0
            },
            {
                q: "Các nguyên nhân gây ra ung thư",
                options: [
                    "Tác động của các yếu tố môi trường",
                    "Ảnh hưởng từ lối sống",
                    "Di truyền",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Nguy cơ gây ung thư",
                options: [
                    "Tuổi tác, béo phì",
                    "Rượu bia, thuốc lá",
                    "Viêm mạn tính",
                    "Tất cả các ý trên"
                ],
                correctIndex: 3
            },
            {
                q: "Virus HPV gây u nhú ở người lây truyền qua đường nào",
                options: [
                    "da, niêm mạc",
                    "máu",
                    "sinh dục",
                    "tiêu hóa"
                ],
                correctIndex: 2
            },
            {
                q: "Ý nào sau đây ko phải tác nhân hóa học gây ung thư:",
                options: [
                    "thuốc lá",
                    "dinh dưỡng",
                    "bức xạ cực tím",
                    "một số thuốc"
                ],
                correctIndex: 2
            },
            {
                q: "dự phòng bước 1 phải dựa trên các yếu tố nào sau đây:",
                options: [
                    "nguyên nhân sinh ung thư",
                    "được áp dụng cho những loại ung thư có tỉ lệ tử vong cao trong cộng đồng",
                    "test sàng lọc",
                    "tính khả thi"
                ],
                correctIndex: 0
            },
            {
                q: "thuốc lá là nguyên nhân gây ... bệnh ung thư phổi:",
                options: [
                    "70%",
                    "80%",
                    "60%",
                    "90%"
                ],
                correctIndex: 3
            },
            {
                q: "Nhóm tác nhân chính gây ung thư là:",
                options: [
                    "Vật lý, Hoá học, Sinh Học",
                    "Vật lý, Hóa học",
                    "Sinh học",
                    "B, C sai"
                ],
                correctIndex: 0,
                keepOrder: true
            },
            {
                q: "Tác nhân vật lý không bao gồm:",
                options: [
                    "Bức xạ ion hoá",
                    "Bức xạ cực tím",
                    "Thuốc lá",
                    "A, B đúng"
                ],
                correctIndex: 2,
                keepOrder: true
            },
            {
                q: "Loại virus nguy cơ gây ung thư:",
                options: [
                    "Chlamydia",
                    "Epstein-Barr",
                    "HIV",
                    "Helicobacter"
                ],
                correctIndex: 1
            },
            {
                q: "Nguyên nhân chủ yếu gây ung thư da:",
                options: [
                    "Tia X",
                    "Tia cực tím trong ánh mặt trời",
                    "Ánh sáng đèn neon",
                    "Ánh sáng đèn led"
                ],
                correctIndex: 1
            },
            {
                q: "ung thư nguyên phát buồng trứng tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "100",
                    "24",
                    "130",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "ung thư nguyên phát đa u tủy xương tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "210",
                    "100",
                    "24",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân chủ yếu gây ung thư da",
                options: [
                    "Tia cực tím",
                    "Tia hồng ngoại",
                    "Tia bức xạ",
                    "Tia Xquang"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư do nghề nghiệp ước tính là nhóm nguyên nhân gây ung thư chiếm:",
                options: [
                    "2-8%",
                    "10-15%",
                    "20-25%",
                    "18-20%"
                ],
                correctIndex: 0
            },
            {
                q: "Chọn đáp án KHÔNG đúng",
                options: [
                    "Bức xạ ion hóa là tác nhân vật lí gây ung thư",
                    "Một số thuốc là tác nhân hóa học gây ung thư",
                    "Dinh dưỡng là tác nhân hóa học gây ung thư",
                    "Dinh dưỡng là tác nhân vật lí gây ung thư"
                ],
                correctIndex: 3
            },
            {
                q: "Phụ nữ bị ung thư vú có hormone:",
                options: [
                    "estrogen cao, progesteron bình thường",
                    "progesteron cao, estrogen giảm",
                    "estrogen cao, progesteron cao",
                    "estrogen cao, progesteron giảm"
                ],
                correctIndex: 2
            },
            {
                q: "Những loại thức ăn có khả năng gây ung thư, trừ:",
                options: [
                    "Một số loại phẩm nhuộm thực phẩm",
                    "Rau được phun thuốc trừ sâu",
                    "Lạc mốc",
                    "Pho-mát mốc"
                ],
                correctIndex: 1
            },
            {
                q: "β-hCG có giá trị trong chẩn đoán bệnh ung thư:",
                options: [
                    "Cổ tử cung",
                    "Nội mạc tử cung",
                    "U nguyên bào nuôi",
                    "Vú"
                ],
                correctIndex: 2
            },
            {
                q: "Thuốc lá có thể gây ra các loại ung thư, trừ:",
                options: [
                    "Phế quản-phổi",
                    "Khoang miệng",
                    "Xương",
                    "Tiết niệu"
                ],
                correctIndex: 2
            },
            {
                q: "Nitrosamine là chất gây ung thư có bản chất là tác nhân:",
                options: [
                    "Hoá học",
                    "Vật lý",
                    "Sinh học",
                    "Yếu tố di truyền"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân có thể gây K bàng quang",
                options: [
                    "Nitrosamin",
                    "Aflatoxin",
                    "EBV",
                    "Thuốc lá"
                ],
                correctIndex: 3
            },
            {
                q: "Tác nhân gây ung thư phổi",
                options: [
                    "EBV",
                    "Mỡ động vật",
                    "Phẩm nhuộm",
                    "Amiang"
                ],
                correctIndex: 3
            },
            {
                q: "ung thư da do nguyên nhân nào là chủ yếu",
                options: [
                    "Bức xạ tia cực tím",
                    "Do di truyền",
                    "Do nhiễm virut",
                    "Không có nguyên nhân"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư nào sau đây không liên quan đến yếu tố nội tiết.",
                options: [
                    "ung thư vú",
                    "ung thư gan",
                    "ung thư nội mạc tử cung",
                    "ung thư tuyến tiền liệt"
                ],
                correctIndex: 1
            },
            {
                q: "Nguyên nhân chủ yếu gây ung thư phế quản ?",
                options: [
                    "Rượu",
                    "Nghề nghiệp",
                    "Thuốc lá",
                    "Vi khuẩn"
                ],
                correctIndex: 2
            },
            {
                q: "Bức xạ cực tím chủ yếu gây ung thư gì?",
                options: [
                    "Ung thư tuyến giáp",
                    "Ung thư bạch cầu",
                    "Ung thư da",
                    "Ung thư vòm họng"
                ],
                correctIndex: 2
            },
            {
                q: "Aflatoxin sinh ra từ nấm mốc Aspergillus flavus là chất gây ra ung thư nào:",
                options: [
                    "Ung thư dạ dày",
                    "Ung thư phổi",
                    "Ung thư gan",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 2
            },
            {
                q: "Chất Nitrosamin gây ung thư có nhiều trong các loại thực phẩm",
                options: [
                    "Hoa quả thối",
                    "Khoai tây mọc mầm",
                    "Lạc mốc",
                    "Cá muối"
                ],
                correctIndex: 3
            },
            {
                q: "Tác nhân gây ung thư dạ dày:",
                options: [
                    "Nitrosamine",
                    "EBV",
                    "3-4 benzopyren",
                    "HBV"
                ],
                correctIndex: 0
            },
            {
                q: "Nhiều loại ung thư có liên quan đến dinh dưỡng, trừ:",
                options: [
                    "Ung thư thực quản",
                    "Ung thư gan",
                    "Ung thư xương",
                    "Ung thư vòm mũi họng"
                ],
                correctIndex: 2
            },
            {
                q: "Có bao nhiêu loại virus gây ung thư",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 2
            },
            {
                q: "Nguyên nhân nào sau đây không gây ung thư?",
                options: [
                    "Thức ăn",
                    "Tiếp xúc hóa chất",
                    "Vi khuẩn",
                    "Chất phóng xạ"
                ],
                correctIndex: 2
            },
            {
                q: "Aflatoxin sinh ra nấm mốc Aspergillus flavus, là nguyên nhân gây ung thư",
                options: [
                    "Đại tràng",
                    "Dạ dày",
                    "Gan",
                    "Bàng quang"
                ],
                correctIndex: 2
            },
            {
                q: "Virut gây u nhú ở người (HPV) thường lan truyền qua đường nào",
                options: [
                    "Sinh dục",
                    "Máu",
                    "Kế cận",
                    "Tất cả đều đúng"
                ],
                correctIndex: 0
            },
            {
                q: "Aflatoxin sinh ra từ đầu?",
                options: [
                    "Nấm mốc Aspergillus flavus",
                    "Nấm Candida",
                    "Vi khuẩn lên men Đ.Chất bảo quản thức ăn"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân gây ung thư đại trực tràng:",
                options: [
                    "Aflatoxin",
                    "Thuốc lá",
                    "Mỡ động vật",
                    "EBV"
                ],
                correctIndex: 2
            },
            {
                q: "Trong ung thư phế quản, thuốc lá chiếm:",
                options: [
                    "70%",
                    "80%",
                    "90%",
                    "100%"
                ],
                correctIndex: 2
            },
            {
                q: "Người hút thuốc lá có nguy cơ mắc ung thư phế quản gấp:",
                options: [
                    "7 lần người không hút",
                    "8 lần người không hút",
                    "9 lần người không hút",
                    "10 lần người không hút"
                ],
                correctIndex: 3
            },
            {
                q: "Gen p53 gây là nguyên nhân gây ra ung thư nào dưới đây ?",
                options: [
                    "Ung thư vòm họng",
                    "Ung thư đại tràng",
                    "Ung thư buồng trứng",
                    "Ung thư Lympho"
                ],
                correctIndex: 1
            },
            {
                q: "HPV gây ung thư gì?",
                options: [
                    "Cổ tử cung và dương vật",
                    "Phổi",
                    "Xương",
                    "Vú"
                ],
                correctIndex: 0
            },
            {
                q: "thuốc là nguyên nhân của khoảng ...% ung thư phế quản",
                options: [
                    "70",
                    "80",
                    "90",
                    "100"
                ],
                correctIndex: 2
            },
            {
                q: "nếu hút trên 20 điếu một ngày, nguy cơ mắc ung thư phế quản cao gấp bao nhiêu lần người không hút thuốc",
                options: [
                    "5-10",
                    "10-15",
                    "15-20",
                    "20-25"
                ],
                correctIndex: 2
            },
            {
                q: "Nguyên nhân gây ung thư. Chọn đáp án sai",
                options: [
                    "3 nhóm tác nhân gây ung thư",
                    "4 nhóm tác nhân gây ung thư",
                    "Gồm các nhóm nguyên nhân: vật lý, hóa học, sinh học",
                    "Một bệnh ung thư có thể do nhiều nhóm nguyên nhân"
                ],
                correctIndex: 1
            },
            {
                q: "Nguyên nhân gây ung thư. Chọn đáp án sai",
                options: [
                    "Thuốc là là nguyên nhân hàng đầu gây ung thư phế quản",
                    "Tia cực tím không gây ung thư",
                    "Dinh dưỡng chiếm khoảng 35% nguyên nhân gây ung thư"
                ],
                correctIndex: 1
            },
            {
                q: "Dinh dưỡng chiếm khoảng bao nhiêu % nguyên nhân gây ung thư:",
                options: [
                    "30",
                    "40",
                    "35",
                    "45"
                ],
                correctIndex: 2
            },
            {
                q: "Virus HTLV 1 liên quan đến bệnh gì:",
                options: [
                    "ung thư gan",
                    "ung thư vòm họng",
                    "ung thư vùng âm hộ",
                    "bệnh bạch cầu tế bào T"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu nhóm tác nhân chính gây ung thư:",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 2
            },
            {
                q: "Nhiều loại ung thư có liên quan đến dinh dưỡng trừ:",
                options: [
                    "Ung thư thực quản",
                    "Ung thư gan",
                    "Ung thư xương",
                    "Ung thư vòm mũi họng"
                ],
                correctIndex: 2
            },
            {
                q: "Tác nhân gây ung thư đại trực tràng:",
                options: [
                    "Aflatoxin",
                    "Thuốc lá",
                    "Mở động vật",
                    "EBV"
                ],
                correctIndex: 2
            },
            {
                q: "Những loại thức ăn có khả năng gây ung thư, trừ:",
                options: [
                    "Một số loại phẩm nhuộm thực phẩm",
                    "Rau được phun thuốc trừ sâu",
                    "Lạc mốc",
                    "Pho-mát mốc"
                ],
                correctIndex: 1
            },
            {
                q: "Người hút thuốc lá có nguy cơ ung thư phế quản gấp bao nhiêu lần không hút:",
                options: [
                    "5",
                    "10",
                    "15",
                    "20"
                ],
                correctIndex: 1
            },
            {
                q: "Dinh dưỡng chiếm bao nhiêu % trong nguyên nhân gây bệnh ung thư",
                options: [
                    "30",
                    "40",
                    "35",
                    "45"
                ],
                correctIndex: 2
            },
            {
                q: "ung thư nguyên phát buồng trứng tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "100",
                    "24",
                    "130",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "12 ung thư nguyên phát đa u tủy xương tỷ số nguy cơ RR là bao nhiêu",
                options: [
                    "210",
                    "100",
                    "24",
                    "65"
                ],
                correctIndex: 0
            },
            {
                q: "Các loại virus liên quan đến bệnh ung thư?",
                options: [
                    "Virus Epstein - Bar",
                    "Virus viêm gan B",
                    "Virus HPV",
                    "Virus HTLV I",
                    "Tất cả đều dùng"
                ],
                correctIndex: 4
            },
            {
                q: "Virus HPV liên quan đến bệnh nào?",
                options: [
                    "Ung thư bắc tổ",
                    "Ung thư phổi",
                    "Ung thư cổ tử cung",
                    "Ung thư gan"
                ],
                correctIndex: 3
            },
            {
                q: "Chất Nitrosamin gây ung thư có nhiều trong các loại thực phẩm :",
                options: [
                    "Hoa quà thổi",
                    "Khoai tây mọc mầm",
                    "Lạc mốc",
                    "Cá muối"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu nguyên nhân gây ra ung thư ?",
                options: [
                    "Nhiều nguyên nhân",
                    "1 nguyên nhân",
                    "Vô số nguyên nhân",
                    "4 Nguyên nhân"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân vật lý gây ra ung thư?",
                options: [
                    "Bức xạ cực tím",
                    "Tia hồng ngoại",
                    "Nhiệt độ",
                    "Trọng lực"
                ],
                correctIndex: 0
            },
            {
                q: "Người da trắng sống ở vùng nhiệt đới có tỷ lệ mắc loại ung thư nào cao hơn người da màu ?",
                options: [
                    "Dạ dày",
                    "Vòm họng",
                    "Phế quản",
                    "Hắc tố da"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                       Bài 5. Cơ chế sinh bệnh ung thư
    // =========================================================================
    {
        title: "Bài 5. Cơ chế sinh bệnh ung thư",
        questions: [
            {
                q: "Ung thư đại tràng do tổn thương gen nào ?",
                options: ["p53", "p54", "p55", "p56"],
                correctIndex: 0
            },
            {
                q: "Khuyết đoạn tại vị trí 5q tại gen Mcc gây ra loại ung thư nào?",
                options: [
                    "Ung thư đại tràng",
                    "U Wilm",
                    "Bạch cầu kinh dòng tủy",
                    "Đa polyp trực tràng"
                ],
                correctIndex: 3
            },
            {
                q: "Các yếu tố kìm hãm khối u:",
                options: [
                    "Thiếu dinh dưỡng, glucose",
                    "Đột biến các gen gây chết tế bào theo lập trình",
                    "Đột biến các phân tử tín hiệu dẫn truyền",
                    "Yếu tố tăng trưởng, các cytokin"
                ],
                correctIndex: 0
            },
            {
                q: "Các gen sinh ung thư có thể thuộc nhóm nào:",
                options: [
                    "Các yếu tố tăng trưởng bị hoạt hóa bất thường (c-cis)",
                    "Các thụ thể yếu tố tăng trưởng (HER2/neu và FMS)",
                    "Các phân tử dẫn truyền tín hiệu tế bào (c-SRC, Ras và cFMS)",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Các tia phóng xạ chủ yếu gây ung thư nào?",
                options: [
                    "Ung thư máu",
                    "Ung thư da",
                    "Ung thư vòm họng",
                    "Ung thư gan"
                ],
                correctIndex: 0
            },
            {
                q: "Tác nhân sinh ung thư từ bên trong môi trường chiếm bao nhiêu %?",
                options: [
                    "20%",
                    "80%",
                    "50%",
                    "40%"
                ],
                correctIndex: 0
            },
            {
                q: "Mỗi quần thể tế bào gồm mấy quần thể nhỏ",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 1
            },
            {
                q: "Bình thường trong tế bào, 2 loại gen Oncogene và Tumor suppressor đóng vai trò gì",
                options: [
                    "Kiểm soát quá trình sinh sản tế bào",
                    "Kiểm soát sự biệt hóa tế bào",
                    "Kiểm soát quá trình chết theo chương trình của tế bào",
                    "Cả 3 đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình xâm lấn của tế bào ung thư không có đặc tính nào:",
                options: [
                    "Tinh di động của các tế bào ác tính",
                    "Khả năng tiêu đạm ở cấu trúc nâng đỡ của mô và cơ quan (Chất collagen)",
                    "Mất sự ức chế của các tế bào.",
                    "Sự lan rộng không bị giới hạn bởi bất cứ nào"
                ],
                correctIndex: 3
            },
            {
                q: "Cơ quan nào ít di căn nhất trong các cơ quan sau:",
                options: [
                    "Phổi",
                    "Tuyến ức",
                    "Não",
                    "Xương"
                ],
                correctIndex: 1
            },
            {
                q: "p53 gây là nguyên nhân gây ra ung thư nào dưới đây ?",
                options: [
                    "K vòm họng",
                    "K buồng trứng",
                    "K đại tràng",
                    "K lympho"
                ],
                correctIndex: 2
            },
            {
                q: "Điều kiện đủ trong tiến trình sinh ung thư là:",
                options: [
                    "Sự tác động hiện đồng giữa các gen đột biến",
                    "Thời gian tích lũy các đột biến",
                    "Xảy ra nhiều đột biến gen",
                    "Tất cả đều đúng"
                ],
                correctIndex: 1
            },
            {
                q: "Nói về cơ chế sinh ung thư, câu nào sau đây là đúng:",
                options: [
                    "Do chu trình tế bào bị rút ngắn",
                    "Giảm tốc độ tế bào chết đi",
                    "Mất sự ức chế tiếp xúc",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Gen nào dưới đây có khả năng gây K đại tràng",
                options: [
                    "MyC",
                    "p53",
                    "Myl",
                    "Cả A,B,C"
                ],
                correctIndex: 1
            },
            {
                q: "Ung thư đại tràng do bất thường gen ?",
                options: [
                    "p53, Abl",
                    "Myl, Raa",
                    "p53, Raa",
                    "Myl, Abl"
                ],
                correctIndex: 2
            },
            {
                q: "Các cơ chế thúc đẩy u, trừ:",
                options: [
                    "Đột biến các phân tử truyền tín hiệu",
                    "Hoạt hóa các gen gây chết tb theo chương trình",
                    "Môi trường giàu O2",
                    "Môi trường giàu dinh dưỡng, năng lượng"
                ],
                correctIndex: 1
            },
            {
                q: "Cơ chế bệnh sinh ung thư gồm:",
                options: [
                    "Cơ chế GEN",
                    "Cơ chế tế bào",
                    "Cơ chế khác",
                    "Cả ba ý trên"
                ],
                correctIndex: 3
            },
            {
                q: "Trong cơ chế bệnh sinh ung thư (cơ chế tế bào) mỗi quần thể tế bào có bao nhiêu quần thể nhỏ",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 1
            },
            {
                q: "Oncogen là gì",
                options: [
                    "Là những gen để phát triển tế bào, hoạt hóa nhờ yếu tố tăng trưởng",
                    "Là những đoạn ADN bị thương tổn bởi tác nhân gây bệnh như hóa học, sinh học, vật lý",
                    "Là do các genome của virus bơm vào cơ thể người",
                    "Tất cả các ý trên đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Đặc điểm nào sau đây của u lành",
                options: [
                    "Tế bào biệt hoá độ cao",
                    "Ít biệt hoá",
                    "Xâm lấn lan rộng",
                    "Phát triển nhanh"
                ],
                correctIndex: 0
            },
            {
                q: "Gen ung thư của U lympho Burkitt là?",
                options: [
                    "Myl",
                    "Myc",
                    "Fms",
                    "p53"
                ],
                correctIndex: 1
            },
            {
                q: "Khuyết đoạn gen Mcc vị trí 54 gây ra loại ung thư nào:",
                options: [
                    "Đa polyp trực tràng",
                    "Ung thư trực tràng",
                    "Ung thư đại tràng",
                    "Ung thư buồng trứng"
                ],
                correctIndex: 0
            },
            {
                q: "Nối đoạn (9,22) gen Abl vị trí 94 gây ra loại ung thư",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư nguyên bào thần kinh",
                    "Bạch cầu kinh thể tủy",
                    "Bạch cầu cấp lympho"
                ],
                correctIndex: 2
            },
            {
                q: "Gen p53 gây là nguyên nhân gây ra ung thư nào dưới đây ?",
                options: [
                    "K vòm họng",
                    "K buồng trứng",
                    "K đại tràng",
                    "K lympho"
                ],
                correctIndex: 2
            },
            {
                q: "Các cơ chế sinh bệnh ung thư",
                options: [
                    "Cơ chế gen",
                    "Cơ chế tế bào",
                    "Cơ chế khác",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Gen Apc thuộc loại ung thư nào.",
                options: [
                    "Ung thư buồng trứng",
                    "Ung thư đại tràng",
                    "Đa polyp trực tràng",
                    "Ung thư trực tràng"
                ],
                correctIndex: 3
            },
            {
                q: "Gen Abl thuộc loại ung thư nào",
                options: [
                    "Bạch cầu kinh thể tủy",
                    "Bạch cầu cấp lympho",
                    "Ung thư trực tràng",
                    "Ung thư đại tràng"
                ],
                correctIndex: 0
            },
            {
                q: "Gen myc thuộc loại ung thư nào",
                options: [
                    "Ung thư nguyên bào thần kinh",
                    "Bạch cầu kinh thể tủy",
                    "Bạch cầu cấp lympho",
                    "Ung thư buồng trứng"
                ],
                correctIndex: 0
            },
            {
                q: "Gen mcc thuộc loại ung thư nào",
                options: [
                    "Carcinoma",
                    "Ung thư đại tràng",
                    "U wilm",
                    "Đa polyp trực tràng"
                ],
                correctIndex: 3
            },
            {
                q: "Nói về cơ chế tế bào sinh ung thư. Câu nào sai?",
                options: [
                    "Chu trình tế bào được kéo dài",
                    "Giảm vận tốc tế bào chết đi",
                    "Tế bào G0 trở lại chu trình",
                    "Mất sự ức chế tiếp xúc"
                ],
                correctIndex: 0
            },
            {
                q: "Gen Apc gây ra loại ung thư nào?",
                options: [
                    "Ung thư trực tràng",
                    "Ung thư phổi",
                    "Ung thư gan",
                    "Không gây ung thư"
                ],
                correctIndex: 0
            },
            {
                q: "Các đặc tính của u lành tính là",
                options: [
                    "Không biệt hóa",
                    "Phân bào",
                    "Có ảnh hưởng nhiều đến sức khỏe",
                    "Không hoại tử"
                ],
                correctIndex: 3
            },
            {
                q: "Các đặc điểm của u ác tính:",
                options: [
                    "Ít biệt hoá",
                    "Không gián phân",
                    "Phát triển chậm",
                    "Xâm lấn ít"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ chế sinh K",
                options: [
                    "Gen",
                    "Tế bào",
                    "RL quá trình nhân đôi ADN",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Cơ chế sinh K",
                options: [
                    "Gen",
                    "Tế bào",
                    "Miễn dịch",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Di căn theo đường máu hay gặp trong loại ung thư nào",
                options: [
                    "Ung thư biểu mô",
                    "Ung thư tế bào mô liên kết",
                    "A,B đều đúng",
                    "A,B đều sai"
                ],
                correctIndex: 1,
                keepOrder: true
            },
            {
                q: "Đúng nhất về cơ chế gen sinh ung thư:",
                options: [
                    "Gen sinh ung thư bị đột biển làm gia tăng dẫn truyền tín hiệu làm tế bào đi vào chu kỳ không hợp lý",
                    "Gen sinh ung thư bị đột biến làm sinh ra nhiều tế bào ung thư",
                    "Gen kháng ung thư có chức năng kìm hãm sự phát triển của tế bào ung thư khi gen kháng ung thư bị đột biển làm ung thư phát triển",
                    "Gen kháng ung thư được biệt hóa làm biến đổi tế bào lành tính thành tế bào ác tính"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư đại tràng có polyp bước đầu tạo polyp bằng cách gây đột biến ở gen nào?",
                options: [
                    "P53",
                    "APC",
                    "RET",
                    "Rb"
                ],
                correctIndex: 1
            },
            {
                q: "Quá trình sinh bệnh ung thư liên quan chặt chẽ đến tổn thương bao nhiêu nhóm gen?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 0
            },
            {
                q: "Đâu không phải là cơ chế sinh ung thư",
                options: [
                    "Rối loạn quá trình nhân đôi ADN như giảm Ethyl hóa ADN",
                    "Rối loạn kiểm soát quá trình tăng trưởng",
                    "Suy giảm miễn dịch",
                    "Tổn thương các gen có chức năng kiểm soát sữa chữa ADN"
                ],
                correctIndex: 0
            },
            {
                q: "Các cơ quan ít bị di căn là",
                options: [
                    "Cơ, da, tuyến ức, não",
                    "Cơ, da, tuyến ức, phổi",
                    "Cơ, da, tuyến ức, xương",
                    "Cơ, da, tuyến ức, lách"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình phát triển tế bào ung thư của gen bao gồm",
                options: [
                    "Sự phân chia tế bào",
                    "Sự biệt hóa, tạo mạch máu",
                    "Xâm lấn và chết tế bào",
                    "Tất cả"
                ],
                correctIndex: 3
            },
            {
                q: "Loại ung thư phát triển nhanh như u lympho Brurkitt có thời gian nhân đôi bao nhiêu ngày?",
                options: [
                    "3 ngày",
                    "4 ngày",
                    "5 ngày",
                    "6 ngày"
                ],
                correctIndex: 0
            },
            {
                q: "Oncegen là những đoạn ADN bị tổn thương bởi các tác nhân gây bệnh, ngoại trừ",
                options: [
                    "Hóa học",
                    "Sinh học",
                    "Vật lý",
                    "Đột biến gen"
                ],
                correctIndex: 3
            },
            {
                q: "Bệnh u Wilm do khuyết đoạn ở đoạn vị trí nào của gen Hạ ras",
                options: [
                    "11p",
                    "11q",
                    "22q",
                    "23p"
                ],
                correctIndex: 0
            },
            {
                q: "U lympho Kurkitt do gen nào gây ra?",
                options: [
                    "Apc",
                    "p53",
                    "Mcc",
                    "Myc"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư buồng trứng do bất thường gen nào ?",
                options: [
                    "Myl",
                    "p53",
                    "Mcc",
                    "Cả A,B,C"
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư có mấy giai đoạn tiến triển",
                options: [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                correctIndex: 2
            },
            {
                q: "Giai đoạn tiền ung thư và tiền lâm sàng chiếm",
                options: [
                    "75% thời gian",
                    "57% thời gian",
                    "25% thời gian",
                    "52% thời gian"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ chế gen sinh ung thư",
                options: [
                    "Gen sinh ung thư bị đột biến làm gia tăng dẫn truyền tín hiệu làm tế bào đi vào chu kỳ không hợp lý",
                    "Gen sinh ung thư bị đột biến làm sản sinh ra nhiều tế bào ung thư",
                    "Gen kháng ung thư có chức năng kìm hãm sự phát triển của tế bào ung thư khi gen này đột biến làm ung thư phát triển",
                    "Gen kháng ung thư được hoạt hóa làm biến đổi tế bào lành thành tế bào ác"
                ],
                correctIndex: 0
            },
            {
                q: "Điền vào chỗ trống: Ung thư là bệnh lý ác tính của tế bào mà tế bào tăng sinh vô hạn độ ngoài ..... của cơ thể",
                options: [
                    "Sự thúc đẩy",
                    "Sự kìm hãm",
                    "Sự phát triển",
                    "Sự kiểm soát"
                ],
                correctIndex: 3
            },
            {
                q: "các gen kháng ung thư có đặc điểm, trừ:",
                options: [
                    "Mã hóa cho các protein kiểm soát phân bào theo hướng ức chế",
                    "Có chức năng làm biệt hóa tế bào",
                    "Làm giảm mã hóa tế bào chết theo chương trình",
                    "Khi bị bất hoạt do đột biến sẽ làm biến đổi tế bào lành thành tế bào ác tính"
                ],
                correctIndex: 2
            },
            {
                q: "Các tác nhân gây bệnh lý ung thư phổi, trừ",
                options: [
                    "Hút thuốc lá",
                    "Hít thở benzen",
                    "Hít thở khí radon",
                    "Bức xạ ion hoá"
                ],
                correctIndex: 1
            },
            {
                q: "Có bao nhiêu giả thuyết về cơ chế hình thành Oncogene",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 2
            },
            {
                q: "Cho đến nay đã có bao nhiêu loại Oncogene tìm thấy:",
                options: [
                    "50",
                    "60",
                    "70",
                    "80"
                ],
                correctIndex: 0
            },
            {
                q: "Nối đoạn (9,22) gen Abl vị trí 9q gây ra loại ung thư",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư nguyên bào thần kinh",
                    "Bạch cầu kinh thể tủy",
                    "Bạch cầu cấp lympho"
                ],
                correctIndex: 2
            },
            {
                q: "Quá trình sinh bệnh ung thư liên quan chặt chẽ đến tổn thương mấy nhóm gen",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correctIndex: 0
            },
            {
                q: "Bệnh bạch cầu kinh thể tủy do rối loạn gen:",
                options: [
                    "p53",
                    "Abl",
                    "Myl",
                    "Raa"
                ],
                correctIndex: 1
            },
            {
                q: "Hiện nay có bao nhiêu loại gen sinh Ung thư ( Oncogene)",
                options: [
                    "30",
                    "40",
                    "50",
                    "20"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư đại tràng có thời gian nhân đôi",
                options: [
                    "2 ngày",
                    "3 ngày",
                    "300 ngày",
                    "600 ngày"
                ],
                correctIndex: 3
            },
            {
                q: "Chọn câu không phải là các nguyên nhân bên ngoài gây ung thư",
                options: [
                    "Hóa xạ trị ion",
                    "Thuốc lá",
                    "Nội tiết tố",
                    "Virus gây ung thư vú HPV"
                ],
                correctIndex: 2
            },
            {
                q: "Ý nào không phải virus sinh ung thư ở người",
                options: [
                    "Virus HTVL 1",
                    "Virus HIV",
                    "Virus viêm gan C",
                    "Virus EB"
                ],
                correctIndex: 2
            },
            {
                q: "Gen p53 gặp trong bệnh nào",
                options: [
                    "Ung thư đại tràng",
                    "Đa polyp trực tràng",
                    "Bạch cầu kinh thể tủy",
                    "U lympho"
                ],
                correctIndex: 0
            },
            {
                q: "Gen Mcc gặp trong bệnh ung thư?",
                options: [
                    "Đa polyp trực tràng",
                    "Ung thư đại tràng",
                    "U Wilm",
                    "Bạch cầu kinh thể tủy"
                ],
                correctIndex: 0
            },
            {
                q: "Các giai đoạn phát triển bệnh ung thư :",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biển",
                    "Giai đoạn di căn",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Giai đoạn nào? Các khối u xâm lấn đến các cơ quan khác trong cơ thể, phá huỷ các cơ quan này.",
                options: [
                    "Giai đoạn khởi phát",
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biển",
                    "Giai đoạn di căn",
                    "Giai đoạn tiến triển"
                ],
                correctIndex: 2
            },
            {
                q: "Giả thuyết cho việc hình thành Oncogen:",
                options: [
                    "Là những gen để phát triển tế bào",
                    "Những đoạn ADN bị tổn thương",
                    "Các genome của virus bơm vào cơ thể người",
                    "Cả 3 ý trên"
                ],
                correctIndex: 3
            },
            {
                q: "Trong cơ chế gen của bệnh sinh ung thư, liên quan chặt chẽ đến tổn thương gen nào:",
                options: [
                    "Gen sinh ung thư (oncogen)",
                    "Gen ức chế khối u (tumor suppressor)",
                    "Cả 2 gen trên",
                    "Không phải cả 2 gen trên"
                ],
                correctIndex: 2
            },
            {
                q: "Aflatoxin là tác nhân gây ung thư được sinh ra tử:",
                options: [
                    "Vi khuẩn",
                    "Nấm mốc",
                    "Virus",
                    "Ký sinh trùng"
                ],
                correctIndex: 1
            },
            {
                q: "Chọn đáp án đúng nhất:",
                options: [
                    "Gen p53 là gen sinh ung thư đại trực tràng",
                    "Có thể phòng ngừa được tất cả các loại K",
                    "Tấn số và thời gian hút thuốc lá càng dài nguy cơ mắc K càng thấp",
                    "Không hút thuốc lá có thể phòng được K phổi"
                ],
                correctIndex: 3
            },
            {
                q: "Ý nào sau đây đúng:",
                options: [
                    "Gen hMSH2, hM1H1 là gen sinh ung thư",
                    "Gen p53 là gen sinh K",
                    "Gen kháng ung thư có chức năng làm chu kỳ phân bào dừng ở pha G0 và mã hóa làm chết tế bào theo chương trình",
                    "Tất cả đáp án trên đều sai"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu giả thuyết hình thành Oncogen?",
                options: [
                    "3",
                    "10",
                    "11",
                    "12"
                ],
                correctIndex: 0
            },
            {
                q: "Vi khuẩn có thể gây bệnh ung thư là:",
                options: [
                    "Trực khuẩn mủ xanh",
                    "HP",
                    "Tụ cầu vàng",
                    "Tất cả đều đúng"
                ],
                correctIndex: 1
            },
            {
                q: "U lympho Burkitt có thời gian nhân đôi khoảng mấy ngày?",
                options: [
                    "4 ngày",
                    "5 ngày",
                    "3 ngày",
                    "7 ngày"
                ],
                correctIndex: 2
            },
            {
                q: "Ung thư dạ dày di căn theo đường nào?",
                options: [
                    "Theo đường đặc biệt",
                    "Theo đường máu",
                    "Theo đường bạch huyết",
                    "Theo đường kế cận"
                ],
                correctIndex: 0
            },
            {
                q: "bệnh ung thư có mấy đặc tính cơ bản",
                options: [
                    "5",
                    "6",
                    "4",
                    "3"
                ],
                correctIndex: 0
            },
            {
                q: "Mỗi quần thể tế bào gồm bao nhiêu quần thể nhỏ?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correctIndex: 0
            },
            {
                q: "Tế bào trong chu trình nhóm I, có đặc điểm:",
                options: [
                    "Sinh sản liên tục, đi từ lần gián phân này đến lần gián phân kế tiếp",
                    "Tế bảo cuối cùng được biệt hóa, rời khỏi chu trình tăng trưởng, chết theo chương",
                    "Tế bào không tăng sinh, không theo chu trình, không phân chia",
                    "Tế bào gốc vạn năng"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ chế của tăng trưởng số lượng của các quần thể tế bào có thể do?",
                options: [
                    "Chu trình tế bào được rút ngắn dẫn đến tăng số lượng tế bào được tạo ra trong 1 đơn vị thời gian ngắn",
                    "Do giảm vận tốc tế bào chết đi cũng đưa đến kết quả có nhiều tế bào được tạo ra hơn hoặc do mất sự tiếp xúc các tế bào ung thư giảm hoặc mất tính kết dính",
                    "Tế bào G0 trở lại chu trình làm tăng thêm số lượng tế bào trong 1 đơn vị thời gian",
                    "Tất cả ý trên"
                ],
                correctIndex: 3
            },
            {
                q: "Điền vào chỗ trống: ung thư là bệnh lý ác tính của tế bào tế bào tăng sinh vô hạn độ ngoài ..... của cơ thể",
                options: [
                    "Sự thúc đẩy",
                    "Sự kìm hãm",
                    "Sự phát triển",
                    "Sự kiểm soát"
                ],
                correctIndex: 3
            },
            {
                q: "Đột biến gen Raa vị trí 1p thường gây ra loại ung thư nào?",
                options: [
                    "Ung thư đại tràng",
                    "Ung thư phổi",
                    "Ung thư xương",
                    "Ung thư thanh quản"
                ],
                correctIndex: 0
            },
            {
                q: "Cơ chế thúc đẩy sinh tồn của u, TRỪ",
                options: [
                    "Đột biến các phân tử dẫn truyền tín hiệu",
                    "Môi trường giàu oxy",
                    "Môi trường đầy đủ dinh dưỡng, năng lượng",
                    "Hoạt hóa các gen gây chết tế bào theo chương trình"
                ],
                correctIndex: 3
            },
            {
                q: "Sự tăng trưởng của tế bào ung thư đặc trưng bởi",
                options: [
                    "Thời gian nhân đôi tế bào và thể tích khối u khác nhau",
                    "Thời gian nhân đôi tế bào và khối lượng u khác nhau",
                    "Cả A và B đều đúng",
                    "Cả A và B đều sai"
                ],
                correctIndex: 0,
                keepOrder: true
            },
            {
                q: "Cơ chế tăng trưởng số lượng của các quần thể tế bào",
                options: [
                    "Chu trình tế bào được kéo dài dẫn đến tăng số lượng tế bào được tạo ra trong một đơn vị thời gian",
                    "Chu trình tế bào được rút ngắn dẫn đến tăng số lượng tế bào được tạo ra trong một đơn vị thời gian",
                    "Giảm vận tốc tế bào chết đi",
                    "A và C đúng"
                ],
                correctIndex: 3,
                keepOrder: true
            },
            {
                q: "Tác nhân gây ung thư phổi:",
                options: [
                    "EBV",
                    "Mỡ động vật",
                    "Phẩm nhuộm",
                    "Amiang"
                ],
                correctIndex: 3
            },
            {
                q: "Các cơ chế thúc đẩy sinh tồn của u, trừ:",
                options: [
                    "Đột biến các phân tử dẫn truyền tín hiệu",
                    "Hoạt hóa các gen gây chết tế bào theo chương trình",
                    "Môi trường giàu oxy",
                    "Môi trường đầy đủ dinh dưỡng, năng lượng"
                ],
                correctIndex: 1
            },
            {
                q: "Quá trình sinh ung thư liên quan chặt chẽ đến:",
                options: [
                    "Các gen lặn",
                    "Các gen trội",
                    "NST21",
                    "Tổn thương hai nhóm: gen sinh ung thư và gen ức chế khối u"
                ],
                correctIndex: 3
            },
            {
                q: "Chức năng của gen kháng ung thư:",
                options: [
                    "Mã hóa những protein kiểm soát phân bào",
                    "Biệt hóa tế bào",
                    "Mã hóa tế bào chết theo chương trình",
                    "Tất cả đáp án trên đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Có bao nhiêu loại Oncogene",
                options: [
                    "40",
                    "50",
                    "60",
                    "70"
                ],
                correctIndex: 1
            },
            {
                q: "Quá trình sinh bệnh ung thư liên quan chặt chẽ đến tổn thương mấy nhóm gen",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctIndex: 1
            },
            {
                q: "Cơ chế của tăng trưởng số lượng các quần thể tế bào có thể do, trừ:",
                options: [
                    "Chu trình tế bào được rút ngắn",
                    "Giảm vận tốc tế bào chết đi",
                    "Tế bào trở lại giai đoạn G0",
                    "Mất sự ức chế tiếp xúc"
                ],
                correctIndex: 2
            },
            {
                q: "Cơ chế sinh bệnh ung thư gồm:",
                options: [
                    "Cơ chế gen",
                    "Cơ chế tế bào",
                    "Cơ chế suy giảm miễn dịch",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            },
            {
                q: "Quá trình sinh bệnh ung thư liên quan chặt chẽ đến tổn thương của mấy nhóm?",
                options: [
                    "3 nhóm",
                    "2 nhóm",
                    "4 nhóm",
                    "5 nhóm"
                ],
                correctIndex: 1
            },
            {
                q: "Đa polyp trực tràng là loại ung thư mang gen gì?",
                options: [
                    "Mcc",
                    "Apc",
                    "Abl",
                    "Myl"
                ],
                correctIndex: 0
            },
            {
                q: "Sự tăng sinh vô hạn độ của tế bào ung thư có thể do nguyên nhân nào sau đây",
                options: [
                    "Do cơ chế mất tiếp xúc",
                    "Do cơ chế tiếp xúc",
                    "Do cơ chế biến đổi",
                    "Do cơ chế mất biến đổi"
                ],
                correctIndex: 0
            },
            {
                q: "Tiến triển tự nhiên và sinh bệnh học của ung thư",
                options: [
                    "Tế bào bình thường, tế bào được khơi mào, tổn thương ung thư, ung thư phát trên lâm sàng",
                    "Tế bào bình thường, tế bào được khơi mào, tổn thương ung thư, ung thư phát trên cận lâm sàng",
                    "Tế bào bình thường, tế bào được khơi mào, tổn thương ung thư, tế bảo chọn lọc, ung thư phát hiện trên lâm sàng",
                    "Tế bào bình thường, tế bào được chọn lọc, tổn thương ung thư, ung thư phát hiện trên lâm sàng"
                ],
                correctIndex: 0
            },
            {
                q: "Chọn câu đúng:",
                options: [
                    "Oncogen là do các genome của virus bơm vào cơ thể người vì thấy các Oncogen này giống với ADN của virus.",
                    "Oncogen là do các genome của vi khuẩn bơm vào cơ thể người vì thấy các Oncogen này giống với ADN của vi khuẩn.",
                    "Oncogen là do các genome của virus bơm vào cơ thể người vì thấy các Oncogen này giống với ARN của virus.",
                    "Oncogen là do các genome của virus bơm vào cơ thể người vì thấy các Oncogen này khác với ARN của vi khuẩn."
                ],
                correctIndex: 0
            },
            {
                q: "Khuyết đoạn 5q ở gen Mcc tương ứng với loại ung thư nào?",
                options: [
                    "Đa polyp trực tràng.",
                    "Ung thư đại tràng.",
                    "Hội chứng Lynch.",
                    "Bạch cầu kinh thể tủy."
                ],
                correctIndex: 0
            },
            {
                q: "Ung thư chiếm tỷ lệ cao nhất ở nữ giới là",
                options: [
                    "Ung thư vú",
                    "Ung thư tử cung",
                    "Ung thư vòi trứng",
                    "Ung thư phổi"
                ],
                correctIndex: 0
            },
            {
                q: "Gen ức chế khối u mã hóa cho những protein kiểm soát phân bào theo hướng ức chế, làm chu kì phân bào bị dừng ở pha nào:",
                options: [
                    "Pha G1",
                    "Pha S",
                    "Pha G2",
                    "Tất cả đều sai"
                ],
                correctIndex: 0
            },
            {
                q: "Bức xạ hơn hóa chủ yếu gây các loại ung thư, trừ:",
                options: [
                    "Tuyến giáp",
                    "Khoang miệng",
                    "Bệnh bạch cầu cấp",
                    "Phổi"
                ],
                correctIndex: 1
            },
            {
                q: "Khói thuốc lá gây ung thư như thế nào",
                options: [
                    "20% nguyên nhân chung và 70% ung thư phổi",
                    "Trong thuốc lá có > 60 chất gây ung thư",
                    "Hút thuốc lá thụ động tăng nguy cơ 20 - 50%",
                    "Tất cả đáp án trên"
                ],
                correctIndex: 3
            },
            {
                q: "Rượu có liên quan đến ung thư, ngoại trừ",
                options: [
                    "Hốc miệng",
                    "Hầu họng",
                    "Thanh quản",
                    "Phổi"
                ],
                correctIndex: 3
            },
            {
                q: "Về u lành tính ?",
                options: [
                    "Dễ di căn",
                    "Hoại tử",
                    "Luôn tát phát",
                    "Có vỏ bọc"
                ],
                correctIndex: 3
            },
            {
                q: "Về u ác tính ?",
                options: [
                    "Phát triển chậm",
                    "Phát triển nhanh",
                    "Không xâm lấn",
                    "Rất ít tái phát"
                ],
                correctIndex: 1
            },
            {
                q: "Các khối u xâm lấn đến các cơ quan khác trong cơ thể, phá huỷ các cơ quan này là đặc điểm của giai đoạn nào",
                options: [
                    "Giai đoạn tăng trưởng, thúc đẩy, chuyển biển",
                    "Giai đoạn khởi phát",
                    "Giai đoạn tiến triển",
                    "Giai đoạn di căn"
                ],
                correctIndex: 3
            },
            {
                q: "Ung thư di căn theo đường bạch huyết hay gặp trong loại ung thư nào",
                options: [
                    "Không có đáp án nào đúng",
                    "Ung thư tế bào mô liên kết",
                    "Ung thư tổ chức đặc biệt",
                    "Ung thư biểu mô"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                         Bài 6. Dự phòng ung thư
    // =========================================================================
    {
        title: "Bài 6. Dự phòng ung thư",
        questions: [
            {
                q: "Dự phòng ung thư bao gồm mấy bước ?",
                options: ["2", "3", "4", "5"],
                correctIndex: 1
            },
            {
                q: "Dự phòng bước 1 là gì?",
                options: [
                    "Là loại trừ hoặc giảm tối đa sự tiếp xúc với các chất gây bệnh",
                    "Là sàng lọc và phát hiện sớm các dấu hiệu của bệnh",
                    "Là tìm biện pháp điều trị bệnh",
                    "Tất cả đều sai"
                ],
                correctIndex: 0
            },
            {
                q: "Trong dự phòng bệnh ung thư",
                options: [
                    "Bước 1, 2 quan trọng nhất",
                    "Bước 2, 3 quan trọng nhất",
                    "Bước 1, 3 quan trọng nhất",
                    "Không có bước nào quan trọng"
                ],
                correctIndex: 0
            }
        ]
    },
    // =========================================================================
    //                       Bài 7. Chẩn đoán bệnh ung thư
    // =========================================================================
    {
        title: "Bài 7. Chẩn đoán bệnh ung thư",
        questions: [
            {
                q: "Triệu chứng báo hiệu ung thư là ?",
                options: [
                    "Ho kéo dài",
                    "Xuất huyết tiết dịch bất thường",
                    "Rối loạn tiêu hóa kéo dài",
                    "Tất cả đều đúng"
                ],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                  Bài 8. Nguyên tắc điều trị bệnh ung thư
    // =========================================================================
    {
        title: "Bài 8. Nguyên tắc điều trị bệnh ung thư",
        questions: [
            {
                q: "Trong 2 năm đầu bệnh nhân thường được khám lại theo chu kỳ nào sau đây:",
                options: ["3-4 tháng", "6 tháng", "12 tháng", "2-3 tháng"],
                correctIndex: 3
            }
        ]
    },
    // =========================================================================
    //                  Bài 9. Điều trị phẫu thuật bệnh ung thư
    // =========================================================================
    {
        title: "Bài 9. Điều trị phẫu thuật bệnh ung thư",
        questions: [
            {
                q: "Nguyên tắc phẫu thuật ung thư bao gồm:",
                options: [
                    "Phẫu thuật ung thư là một lĩnh vực riêng có thể không tuân theo những nguyên tắc chung của ngoại khoa",
                    "Không nhất thiết phải có chẩn đoán chính xác, đúng giai đoạn trước điều trị phẫu thuật",
                    "Phẫu thuật ung thư phải tuân theo những nguyên tắc chung của điều trị bệnh ung thư",
                    "Phẫu thuật ung thư có thể rộng rãi hơn so với chỉ định"
                ],
                correctIndex: 2
            }
        ]
    },
    // =========================================================================
    //                       Bài 10. Xạ trị bệnh ung thư
    // =========================================================================
    {
        title: "Bài 10. Xạ trị bệnh ung thư",
        questions: [
            {
                q: "Các yếu tố ảnh hưởng tác động của tia phóng xạ, TRỪ:",
                options: [
                    "Yếu tố Oxy",
                    "Vận tốc tăng trưởng của mô bướu",
                    "Yếu tố liều xạ",
                    "Yếu tố nhạy xạ nội tại"
                ],
                correctIndex: 1
            }
        ]
    },
    // =========================================================================
    //                Bài 11. Các phương pháp điều trị toàn thân
    // =========================================================================
    {
        title: "Bài 11. Các phương pháp điều trị toàn thân",
        questions: [
            {
                q: "Biến chứng gây nguy cơ tử vong trong điều trị hóa chất liều cao là:",
                options: ["Nhiễm trùng", "Viêm gan cấp", "Tiểu khó", "Vô sinh, rối loạn giới tính"],
                correctIndex: 0
            }
        ]
    },
    // =========================================================================
    //                     Bài 12. Điều trị đau do ung thư
    // =========================================================================
    {
        title: "Bài 12. Điều trị đau do ung thư",
        questions: [
            {
                q: "Ý nào sau đây là đúng:",
                options: [
                    "Đau cảm thụ là do kích thích các đầu mút thụ cảm của các dây thần kinh còn nguyên vẹn chưa bị tổn thương",
                    "Đau cảm thụ gồm đau thân thể và đau do bệnh lý thần kinh",
                    "Đau thân thể do các đầu mút thần kinh tại các tạng bị kích thích do viêm nhiễm, chèn ép",
                    "Tất cả đều sai"
                ],
                correctIndex: 0
            }
        ]
    }
];