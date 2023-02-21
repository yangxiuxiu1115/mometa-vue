export const TSBuild = (entry: string, target: string, other?: string) => {
  return `tsup ${entry} --dts --clean --external vite --format cjs,esm -d __mometa/${target} ${other}`
}
