import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useParams } from "react-router-dom"
import { lists } from "../shared/constants"

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ChangeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let {id} = useParams();
    const detail = lists.find(item => item.id === Number(id));

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{border: 'solid 1px'}} label="MÔ TẢ" {...a11yProps(0)} />
          <Tab style={{border: 'solid 1px'}} label="Chế Độ Bảo Hành / Hậu Mãi" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
        <div className="tab tab_flex">
          <div className="left_tab">
            <p><strong>Thương Hiệu: </strong>{detail.brand} </p>
            <p><strong>Xuất Xứ: </strong>{detail.origin}</p>
            <p><strong>Giới Tính:</strong> {detail.gender}</p>
            <p><strong>Kính: </strong>{detail.glass}</p>
            <p><strong>Máy: </strong>{detail.machine}</p>
            <p><strong>Bảo Hành:</strong> {detail.insurance} Năm</p>
          </div>
          <div className="right_tab">
            <h2>ĐỒNG HỒ DOXA D171RWH – ĐẲNG CẤP VỚI 8 VIÊN KIM CƯƠNG THẬT</h2>
            <p>Nổi tiếng là thương hiệu đồng hồ kim cương với lịch sử hơn 130 năm kinh nghiệm, Doxa đã và đang ngày càng chứng minh vị thế của mình trên đấu trường đồng hồ thế giới.<br />
              Trong đó, phiên bản đồng hồ cao cấp với số hiệu Doxa D171RWH được xem là một trong những sản phẩm ăn khách nhất của hãng. Không chỉ nhờ vẻ ngoài sang trọng hay chất lượng tuyệt hảo, mà giá thành cũng là yếu tố khiến nam giới không ngần ngại sở hữu ngay.</p>
            <img src="https://cdn3.dhht.vn/wp-content/uploads/2020/06/DOXA-D171RWH-4.jpg" alt="" />
          
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tab">
            <div className="childtab">
              <h3>CHẾ ĐỘ BẢO HÀNH</h3>
              <strong>Tất cả các đồng hồ khi bán ra đều kèm theo 2 phiếu bảo hành:</strong>
              <ul>
                  <li>1 Phiếu Bảo Hành (hoặc Thẻ Bảo Hành/Sổ Bảo Hành) của hãng có giá trị bảo hành Quốc tế (Thời gian bảo hành tùy theo quy định của từng hãng).</li>
                  <li>1 Phiếu Bảo Hành của Hải Triều (Sử dụng để được thay pin miễn phí vĩnh viễn / Hưởng chế độ bảo hành tăng thêm từ 1-4 năm của Hải Triều).</li>
              </ul>
            </div>
            <div className="childtab">
              <p><strong>Ví dụ:</strong> Đồng Hồ Citizen có chế độ bảo hành chính hãng: máy = 12 tháng, Pin = 12 tháng.</p>
              <ul>
                <li>Khi mua tại Hải Triều, Khách hàng sẽ được tặng thêm thời gian bảo hành từ 4 năm về máy. Pin = Vĩnh Viễn.</li>
                <li>Tổng cộng: Khi mua tại Hải Triều, đồng hồ Citizen sẽ được bảo hành máy = 05 năm, Pin = Vĩnh Viễn.</li>
              </ul>
            </div>

        </div>
      </TabPanel>
    </Box>
  );
}
