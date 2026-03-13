/**
 * Format a serial order number as zero-padded string: 123 → "#00123"
 */
function formatOrderNumber(serial) {
  return `#${String(serial).padStart(5, '0')}`
}

module.exports = { formatOrderNumber }
