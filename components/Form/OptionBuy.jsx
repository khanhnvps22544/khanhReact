import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Trả tiền mặt khi nhận hàng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <input type="radio" /> Trả tiền mặt khi nhận hàng<br />
          <p>Các bạn chỉ phải trả tiền khi nhận hàng!</p>
        <strong>Ngay tại nhà bạn!</strong>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Chuyển khoản ngân hàng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Bạn ở HN và muốn tặng quà cho bạn mình ở HCM,
                bạn ở Huế và muốn tặng quà bạn mình ở Đà Nẵng,
                bạn muốn bên trong quà tặng của bạn có 1 tấm thiệp ghi những lời chúc của bạn tới người thân!
                Rất đơn giản, chúng tôi có giải pháp cho bạn …</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Thanh Toán Qua Thẻ ATM Hoặc Thẻ Quốc Tế (Có Trả Góp Dài Kỳ)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <input name='bank' type="radio" />Thanh toán bằng thẻ quốc tế (Visa/Master) <br />
            <input name='bank' type="radio" />Thanh toán trả góp (Thẻ quốc tế Visa/Master) <br />
            <input name='bank' type="radio" />Thanh toán bằng thẻ ATM/IB
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
