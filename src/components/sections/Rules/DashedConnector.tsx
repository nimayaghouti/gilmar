import Box from '@mui/material/Box';

export default function DashedConnector() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: 40,
        left: '12%',
        right: '12%',
        display: { xs: 'none', md: 'block' },
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 839 136"
        width="100%"
        height="auto"
        fill="none"
        style={{ display: 'block' }}
      >
        <path
          d="M837.924 3.84619C823.16 24.0161 713.541 136.148 601.403 134.897C497.275 133.735 453.993 -37.7093 262.46 59.1797C94.1725 144.309 53.841 51.5917 0.999926 1.00004"
          stroke="#E6E8EC"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 12"
        />
      </svg>
    </Box>
  );
}
