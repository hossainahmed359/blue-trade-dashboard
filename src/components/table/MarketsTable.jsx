import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useColors } from '../../contexts/theme';
import { marketCategory, marketTableRows } from '../../configs/meta/marketsTableMeta';
import { ViewAllBtn } from '../button/ViewAllBtn';



const checkIsNeg = (value) => {
  return value < 0 ? true : false;
}

const MarketsTable = () => {

  const { colors } = useColors();

  const [category, setCategory] = useState(marketCategory[0]);


  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px', gap: '10px' }}>
          <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
            Markets
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
            {marketCategory.map((item, index) =>
              <CategoryBtn
                key={`category-${index + 1}`}
                onClick={() => setCategory(item)}
                active={item === category ? true : false}
              >
                {item}
              </CategoryBtn>)}
          </Box>
        </Box>
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
      <Grid item sm={12} >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <ViewAllBtn />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MarketsTable

export const CategoryBtn = ({ onClick = () => { }, active, children }) => {

  const { colors } = useColors();

  return (
    <Button
      onClick={onClick}
      className={`${active ? 'active' : ''}`}
      sx={{
        textTransform: 'capitalize',
        color: colors.textColor,
        fontWeight: 600,
        background: colors.grey[900],
        fontSize: '9px',
        borderRadius: '7px',
        transition: 'all 0.2s',
        '&:hover , &.active': {
          color: colors.blueAccent[500],
          background: colors.grey[900],
        },
        minWidth: 'max-content',
        minHeight: 'max-content',
        padding: '5px 10px'

      }}>
      {children}
    </Button>
  )
}



