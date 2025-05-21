import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQ3NTk3MzYwLCJzdWIiOiJhNGI3YWI4Yi1mYzU2LTQwOTQtOTU0ZC0xYzgwMTZhYzA0NTl-U1RBR0lOR344ODBmYzY5OS03NTZkLTQzYzItODRmMy04M2UzMmRlYWNhMDIifQ.GQRf-5JdZrZNjB1dFXVsELfvTKH7g9XGquWTiexcL-w',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  
  
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    'b4c3d760-7deb-49b4-a8c8-632fd4994c45',
    'b9635300-8c81-4d66-a702-660f054ff101'
  );

  await session.applyLens(lens);
})();
