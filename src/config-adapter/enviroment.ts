import { Environment } from '../domain/enviroment'

export const getEnvironment = (
  env: NodeJS.ProcessEnv = process.env,
): Environment => {
  const requiredEnvVar = (name: string): string => {
    const value = env[name]
    if (!value) throw new Error(`Missing required environment variable ${name}`)
    return value
  }

  return {
    appEnv: env['APP_ENV'] || 'development',
    contentfulSpaceId: requiredEnvVar('CONTENTFUL_SPACE_ID'),
    contentfulApiKey: requiredEnvVar('CONTENTFUL_API_KEY'),
  }
}
