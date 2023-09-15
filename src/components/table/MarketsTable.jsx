import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import { useColors } from '../../contexts/theme';

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
  createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
  createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
  createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
  createData('SOLUSDT', 'Solana', '$495', +11.1),
  createData('BNBUSDT', 'Binance', '$267 ', +6.7),
  createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
];


const MarketsTable = () => {

  const { colors } = useColors();

  return (
    <Box>
      <Box >
        <TableContainer sx={{
          maxHeight: '290px',
          paddingRight: '15px',

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
                  <TableCell sx={{ fontWeight: 600, paddingLeft: 0 }} component="th" scope="row">
                    {row.market}
                  </TableCell>
                  <TableCell align="left" sx={{ color: colors.grey[500], fontWeight: 600, fontSize: '11px' }}>{row.currency}</TableCell>
                  <TableCell align="right" sx={{ paddingLeft: 0 }}>{row.price}</TableCell>
                  <TableCell align="right" sx={{ paddingRight: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: colors.greenAccent[800],
                        color: colors.greenAccent[500],
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '3px 5px',
                        borderRadius: '13px'
                      }}>
                      {row.percentage}%
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default MarketsTable
