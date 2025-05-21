import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQ3NTk3MzYwLCJzdWIiOiJhNGI3YWI4Yi1mYzU2LTQwOTQtOTU0ZC0xYzgwMTZhYzA0NTl-UFJPRFVDVElPTn5lMzk4NThmNS00MjkzLTRmZTAtOGU4MC0xNTUzMjkzZWI4ZjMifQ.cKda0zovawMjyQo9fjM5LfwyWcYMuTqp1LGizBC727c',
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
    'd00499b2-db28-46f2-bcb3-7ea5057fb704',
    'b9635300-8c81-4d66-a702-660f054ff101'
  );

  await session.applyLens(lens);
})();
