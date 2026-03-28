import { registerAs } from '@nestjs/config';

export default registerAs('validation', () => ({
  // Global validation options
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: false,
  },

  // Custom validation messages
  messages: {
    required: '{{property}} is required',
    isString: '{{property}} must be a string',
    isEmail: '{{property}} must be a valid email',
    minLength: '{{property}} must be at least {{constraints.0}} characters',
    maxLength: '{{property}} must be at most {{constraints.0}} characters',
    isNumber: '{{property}} must be a number',
    isInt: '{{property}} must be an integer',
    isEnum:
      '{{property}} must be one of the following values: {{constraints.0}}',
  },

  // Sanitization
  sanitization: {
    enabled: true,
    stripTags: true,
    trimStrings: true,
  },
}));
