// utils/date.js

/**
 * 将 ISO 字符串或 Date 对象格式化为 'YYYY-MM-DD HH:mm' 字符串
 * @param {string|Date} input
 * @returns {string}
 */
export function formatDateTime(input) {
  if (!input) return ''
  let date
  if (typeof input === 'string') {
    // 兼容iOS，去掉T和Z
    input = input.replace('T', ' ').replace('Z', '')
    date = new Date(input)
    if (isNaN(date.getTime())) return input // 解析失败原样返回
  } else if (input instanceof Date) {
    date = input
  } else {
    return ''
  }
  const y = date.getFullYear()
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const d = date.getDate().toString().padStart(2, '0')
  const h = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  return `${y}-${m}-${d} ${h}:${min}`
}