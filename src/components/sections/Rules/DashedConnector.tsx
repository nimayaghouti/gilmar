import Box from '@mui/material/Box';

export default function DashedConnector() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: 96,
        left: '12%',
        right: '12%',
        display: { xs: 'none', md: 'block' },
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 800 40"
        width="100%"
        height="40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 20 C 150 0, 250 40, 400 20 C 550 0, 650 40, 800 20"
          stroke="#DCE3E8"
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
      </svg>
    </Box>
  );
}
