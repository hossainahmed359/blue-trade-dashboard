import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Grid } from '@mui/material';
import { useColorMode, useColors } from '../../contexts/theme';
import { useTheme } from '@emotion/react';
import { DARK_THEME } from '../../configs/meta/colorPalette';

function createData(
  market,
  currency,
  price,
  percentage,
) {
  return { market, currency, price, percentage };
}

const rows = [
  createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
  createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
  createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
  createData('SOLUSDT', 'Solana', '$495', +11.1),
  createData('BNBUSDT', 'Binance', '$267 ', +6.7),
  createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
  createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
  createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
  createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
  createData('SOLUSTD', 'Solana', '$495', +11.1),
  createData('BNBUSTD', 'Binance', '$267 ', +6.7),
  createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
];


const checkIsNeg = (value) => {
  return value < 0 ? true : false;
}

const MarketsTable = () => {

  const { colors } = useColors();
  const { mode } = useColorMode();

  return (
    <Grid container gap={3}>
      <Grid item sm={12}>
        Top
      </Grid>
      <Grid item sm={12}>
        <TableContainer sx={{
          maxHeight: '290px',
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
              {rows.map((row) => (
                <TableRow
                  key={row.market}
                  sx={{
                    'td, th': { borderBottom: `0.05rem solid ${colors.grey[900]}`, paddingY: '13px' },
                    '&:last-child td, &:last-child th': { border: 0 },

                  }}
                >
                  <TableCell sx={{ fontWeight: 600, paddingLeft: 0, }} component="th" scope="row">
                    {row.market}
                  </TableCell>
                  <TableCell align="left" sx={{ color: colors.grey[400], fontWeight: 600, fontSize: '12px' }}>{row.currency}</TableCell>
                  <TableCell align="right" sx={{ paddingLeft: 0, fontWeight: 600 }}>{row.price}</TableCell>
                  <TableCell align="right"
                    sx={{
                      maringLeft: 'auto',
                      paddingRight: 0,
                      fontWeight: 500
                    }}>
                    <Box
                      sx={{
                        backgroundColor: checkIsNeg(row.percentage) ? colors.redAccent[800] : colors.greenAccent[800],
                        color: checkIsNeg(row.percentage) ? colors.redAccent[400] : colors.greenAccent[500],
                        marginLeft: 'auto',
                        padding: '3px 5px',
                        borderRadius: '13px',
                        textAlign: 'center',
                        width: '59px'
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
      <Grid item sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button
          variant="text"
          sx={{
            fontSize: '10px',
            color: colors.grey[500],
            fontWeight: 600,
            border: `1px solid ${colors.grey[800]}`,
            padding: '5px',
            marginRight: '14px',
            borderRadius: '7px',
            background: mode === DARK_THEME ? colors.grey[900] : 'none',
            textTransform: 'capitalize',
          }}>
          View All
        </Button>
      </Grid>
    </Grid>
  )
}

export default MarketsTable
