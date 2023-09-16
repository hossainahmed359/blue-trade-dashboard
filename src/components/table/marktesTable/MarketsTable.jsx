import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box, Grid} from '@mui/material';
import { useColors } from '../../../contexts/theme';
import { marketTableRows } from '../../../configs/meta/marketsTableMeta';
import { ViewAllBtn } from '../../button/ViewAllBtn';
import MarketsCategorySection from './MarketsCategory';



const checkIsNeg = (value) => {
  return value < 0 ? true : false;
}

const MarketsTable = () => {

  const { colors } = useColors();
  const [category, setCategory] = useState('All');


  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <MarketsCategorySection category={category} setCategory={setCategory} />
      </Grid>
      <Grid item sm={12}>
        <TableContainer sx={{
          height: '290px',
          paddingRight: '15px',
          color: colors.textColor,
          "&::-webkit-scrollbar": {
            width: 3
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: colors.grey[900]
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.grey[800],
            borderRadius: 2
          }
        }}>
          <Table>
            <TableBody>
              {marketTableRows[category].map((row) => (
                <TableRow
                  key={row.market}
                  sx={{
                    'td, th': { borderBottom: `0.05rem solid ${colors.grey[900]}`, paddingY: '13px' },
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell sx={{ fontWeight: 600, paddingLeft: 0, }} component="th" scope="row">{row.market}</TableCell>
                  <TableCell align="left" sx={{ color: colors.grey[400], fontWeight: 600, fontSize: '12px' }}>{row.currency}</TableCell>
                  <TableCell align="right" sx={{ paddingLeft: 0, fontWeight: 600 }}>{row.price}</TableCell>
                  <TableCell align="right"
                    sx={{
                      maringLeft: 'auto',
                      paddingRight: 0,
                      fontWeight: 500,
                      fontSize: '10px'
                    }}>
                    <Box
                      sx={{
                        backgroundColor: checkIsNeg(row.percentage) ? colors.redAccent[800] : colors.greenAccent[800],
                        color: checkIsNeg(row.percentage) ? colors.redAccent[400] : colors.greenAccent[500],
                        marginLeft: 'auto',
                        padding: '4px',
                        borderRadius: '13px',
                        textAlign: 'center',
                        width: '55px'
                      }}>
                      {row.percentage}%
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item sm={12} >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <ViewAllBtn />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MarketsTable;







