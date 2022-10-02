
import { projectLocale } from "@common/locale"

export const createProductsPaths = (paths: string[]) => {
    const result: string[] = []
    projectLocale.push(""); // `/products/[slug]`を生成する為、空要素を追加
    const _paths = projectLocale.map((locale) => {
        return paths.map((path) => {
            return `${locale === "" ? "": `/${locale}`}/products/${path}`
        })
    })
    for(var index = 0; index < _paths.length; index++) {
        _paths[index].map((path) => result.push(path))
    }
    return result;
}