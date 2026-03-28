import { registerAs } from '@nestjs/config';

export default registerAs('storage', () => ({
  // Storage type: local, s3, gcs, azure
  type: process.env.STORAGE_TYPE || 'local',

  // Local storage
  local: {
    path: process.env.LOCAL_STORAGE_PATH || './uploads',
    serveRoot: '/uploads',
  },

  // AWS S3 Configuration
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    bucket: process.env.AWS_S3_BUCKET,
    endpoint: process.env.AWS_S3_ENDPOINT,
    cdnUrl: process.env.AWS_S3_CDN_URL,
    acl: 'private',
  },

  // File Upload Limits
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE as string, 10) || 5242880, // 5MB
    allowedTypes: process.env.ALLOWED_FILE_TYPES?.split(',') || [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/pdf',
    ],
    generateUniqueFilename: true,
  },
}));
