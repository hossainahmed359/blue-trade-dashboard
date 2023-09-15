import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box, Grid, Typography } from '@mui/material';
import { useColors } from '../../../contexts/theme';
import { ViewAllBtn } from '../../button/ViewAllBtn';
import { historyTableRows } from '../../../configs/meta/historyTableMeta';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const HistoryTable = () => {

  const { colors } = useColors();

  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
            History
          </Typography>
          <ViewAllBtn sx={{ marginRight: '0px' }} />
        </Box>
      </Grid>
      <Grid item sm={12}>
        <TableContainer sx={{
          // height: '190px',
          // paddingRight: '15px',
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
              {historyTableRows.map((row) => (
                <TableRow
                  key={row.transactionType}
                  sx={{
                    'td, th': { borderBottom: `0.05rem solid ${colors.grey[900]}`, paddingY: '13px' },
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell sx={{ fontWeight: 600, paddingLeft: 0, marginLeft: 0 }} >
                    <Box sx={{
                      backgroundColor: row.nagBalance ? colors.redAccent[800] : colors.greenAccent[800],
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '25px',
                      height: '25px',
                      borderRadius: '50%',
                     
                    }}>
                      {row.nagBalance ?
                        <ArrowDownwardIcon sx={{ color: colors.redAccent[400], fontSize: '14px' }} /> :
                        <ArrowUpwardIcon sx={{ color: colors.greenAccent[400], fontSize: '14px' }} />
                      }
                    </Box>
                  </TableCell>
                  <TableCell align="left" component="th" scope="row" sx={{ paddingLeft: 0, fontWeight: 600 }}>{row.transactionType}</TableCell>
                  <TableCell align="right" sx={{ paddingLeft: 0, fontWeight: 500, color: row.nagBalance ? colors.redAccent[500] : colors.greenAccent[500] }}>{row.balance}</TableCell>
                  <TableCell align="right" sx={{ paddingLeft: 0, fontWeight: 600 }}>{row.time}</TableCell>
                  <TableCell align="right"
                    sx={{
                      maringLeft: 'auto',
                      paddingRight: 0,
                      fontWeight: 500,
                      fontSize: '10px'
                    }}>
                    <Box
                      sx={{
                        backgroundColor: row.status === 'pending' ? colors.yellowAccent[800] : colors.greenAccent[800],
                        color: row.status === 'pending' ? colors.yellowAccent[400] : colors.greenAccent[500],
                        marginLeft: 'auto',
                        padding: '5px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        width: '55px'
                      }}>
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default HistoryTable;







