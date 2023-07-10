import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        contained: {
          backgroundColor: '#FECC2F',
          color: '#0C0735',
          boxShadow: theme.shadows[8],

          '&:hover': {
            backgroundColor: '#4445fb',
            boxShadow: theme.shadows[4],
            color: '#fff',
          },
          '&:disabled': {
            backgroundColor: '#FECC2F',
            color: '#0C0735',
            boxShadow: theme.shadows[8],
          },
          '&:hover:disabled': {
            backgroundColor: '#4445fb',
            color: '#0C0735',
            boxShadow: theme.shadows[8],
          },
        },
      },
    },
  };
}
