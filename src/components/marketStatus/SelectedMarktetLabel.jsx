import React from 'react';
import { Box, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useColorMode, useColors } from '../../contexts/theme'
import { DARK_THEME } from '../../configs/meta/colorPalette';

const checkIsNeg = (value) => {
    return value < 0 ? true : false;
  }

const SelectedMarktetLabel = ({ activeMarket, onClick }) => {

    const { colors } = useColors();
    const { mode } = useColorMode();

    return (
        <Box
            onClick={onClick}
            sx={{
                background: mode === DARK_THEME ? colors.grey[900] : colors.greyLight[500],
                padding: '10px 20px',
                borderRadius: '12px',
                width: '300px',
                height: '100%',
                paddingRight: '50px',
                position: 'relative',
                cursor: 'pointer',

            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '5px',
            }}>
                <Typography sx={{ color: colors.textColor, fontWeight: '600', fontSize: '20px' }}>
                    {activeMarket.market}
                </Typography>
                <Typography sx={{ color: colors.textColor, fontWeight: '600', fontSize: '18px' }}>
                    {activeMarket.price}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: 600, paddingLeft: '1px' }}>
                    {activeMarket.currency}
                </Typography>

                <Typography
                    variant="p"
                    sx={{
                        color: checkIsNeg(activeMarket.percentage) ? colors.redAccent[500] : colors.greenAccent[500],
                        fontSize: '10px',
                        fontWeight: 500,
                        padding: '3px 10px',
                        backgroundColor:checkIsNeg(activeMarket.percentage) ? colors.redAccent[800] : colors.greenAccent[800],
                        borderRadius: '30px'
                    }}>
                    {activeMarket.percentage}%
                </Typography>
            </Box>
            <Box sx={{
                position: 'absolute',
                right: 10,
                top: 0,
                bottom: 0,
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ArrowDropDownIcon sx={{ fontSize: '30px' }} />
            </Box>
        </Box>
    )
}

export default SelectedMarktetLabel
