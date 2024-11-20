export const STATUS_CODE_CONSTANT = {
  CONTINUE: 100, // Tiếp tục
  SWITCHING_PROTOCOLS: 101, // Chuyển đổi giao thức
  PROCESSING: 102, // Đang xử lý

  SUCCESS: 200, // Thành công
  CREATED: 201, // Đã tạo
  ACCEPTED: 202, // Đã chấp nhận
  NON_AUTHORITATIVE_INFO: 203, // Thông tin không có thẩm quyền
  NO_CONTENT: 204, // Không có nội dung
  RESET_CONTENT: 205, // Đặt lại nội dung
  PARTIAL_CONTENT: 206, // Nội dung từng phần

  MULTIPLE_CHOICES: 300, // Nhiều lựa chọn
  MOVED_PERMANENTLY: 301, // Đã chuyển vĩnh viễn
  FOUNDED: 302, // Đã tìm thấy
  SEE_OTHER: 303, // Xem khác
  NOT_MODIFIED: 304, // Không thay đổi
  USE_PROXY: 305, // Sử dụng proxy
  TEMPORARY_REDIRECT: 307, // Chuyển hướng tạm thời
  PERMANENT_REDIRECT: 308, // Chuyển hướng vĩnh viễn

  BAD_REQUEST: 400, // Yêu cầu không hợp lệ
  UNAUTHORIZED: 401, // Chưa xác thực
  PAYMENT_REQUIRED: 402, // Yêu cầu thanh toán
  FORBIDDEN: 403, // Bị cấm
  NOT_FOUND: 404, // Không tìm thấy
  METHOD_NOT_ALLOWED: 405, // Phương thức không được phép
  NOT_ACCEPTABLE: 406, // Không chấp nhận
  PROXY_AUTH_REQUIRED: 407, // Yêu cầu xác thực proxy
  REQUEST_TIMEOUT: 408, // Hết thời gian yêu cầu
  CONFLICT: 409, // Xung đột
  GONE: 410, // Không còn tồn tại
  LENGTH_REQUIRED: 411, // Yêu cầu độ dài
  PRECONDITION_FAILED: 412, // Điều kiện tiên quyết thất bại
  PAYLOAD_TOO_LARGE: 413, // Nội dung yêu cầu quá lớn
  URI_TOO_LONG: 414, // URI quá dài
  UNSUPPORTED_MEDIA_TYPE: 415, // Định dạng không được hỗ trợ
  RANGE_NOT_SATISFIABLE: 416, // Phạm vi không phù hợp
  EXPECTATION_FAILED: 417, // Kỳ vọng thất bại
  IM_A_TEAPOT: 418, // Tôi là một ấm trà (mã vui)
  MISDIRECTED_REQUEST: 421, // Yêu cầu bị gửi sai hướng
  UNPROCESSABLE_ENTITY: 422, // Thực thể không thể xử lý
  LOCKED: 423, // Bị khóa
  FAILED_DEPENDENCY: 424, // Phụ thuộc thất bại
  TOO_EARLY: 425, // Quá sớm
  UPGRADE_REQUIRED: 426, // Yêu cầu nâng cấp
  PRECONDITION_REQUIRED: 428, // Yêu cầu điều kiện tiên quyết
  TOO_MANY_REQUESTS: 429, // Quá nhiều yêu cầu
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // Trường tiêu đề yêu cầu quá lớn
  UNAVAILABLE_FOR_LEGAL_REASONS: 451, // Không có sẵn vì lý do pháp lý

  SERVER_ERROR: 500, // Lỗi máy chủ nội bộ
  NOT_IMPLEMENTED: 501, // Chưa được thực hiện
  BAD_GATEWAY: 502, // Gateway lỗi
  SERVICE_UNAVAILABLE: 503, // Dịch vụ không khả dụng
  GATEWAY_TIMEOUT: 504, // Hết thời gian Gateway
  HTTP_VERSION_NOT_SUPPORTED: 505, // Phiên bản HTTP không được hỗ trợ
  VARIANT_ALSO_NEGOTIATES: 506, // Biến thể cũng đàm phán
  INSUFFICIENT_STORAGE: 507, // Không đủ dung lượng lưu trữ
  LOOP_DETECTED: 508, // Phát hiện vòng lặp
  NOT_EXTENDED: 510, // Không mở rộng
  NETWORK_AUTHENTICATION_REQUIRED: 511, // Yêu cầu xác thực mạng
};

export const STATUS_MESSAGE_CONSTANT = {
  CONTINUE: 'Continue', // Tiếp tục
  SWITCHING_PROTOCOLS: 'Switching Protocols', // Chuyển đổi giao thức
  PROCESSING: 'Processing', // Đang xử lý

  SUCCESS: 'Success', // Thành công
  CREATED: 'Created', // Đã tạo
  ACCEPTED: 'Accepted', // Đã chấp nhận
  NON_AUTHORITATIVE_INFO: 'Non-Authoritative Information', // Thông tin không có thẩm quyền
  NO_CONTENT: 'No Content', // Không có nội dung
  RESET_CONTENT: 'Reset Content', // Đặt lại nội dung
  PARTIAL_CONTENT: 'Partial Content', // Nội dung từng phần

  MULTIPLE_CHOICES: 'Multiple Choices', // Nhiều lựa chọn
  MOVED_PERMANENTLY: 'Moved Permanently', // Đã chuyển vĩnh viễn
  FOUNDED: 'Founded', // Đã tìm thấy
  SEE_OTHER: 'See Other', // Xem khác
  NOT_MODIFIED: 'Not Modified', // Không thay đổi
  USE_PROXY: 'Use Proxy', // Sử dụng proxy
  TEMPORARY_REDIRECT: 'Temporary Redirect', // Chuyển hướng tạm thời
  PERMANENT_REDIRECT: 'Permanent Redirect', // Chuyển hướng vĩnh viễn

  BAD_REQUEST: 'Bad Request', // Yêu cầu không hợp lệ
  UNAUTHORIZED: 'Unauthorized', // Chưa xác thực
  PAYMENT_REQUIRED: 'Payment Required', // Yêu cầu thanh toán
  FORBIDDEN: 'Forbidden', // Bị cấm
  NOT_FOUND: 'Not Found', // Không tìm thấy
  METHOD_NOT_ALLOWED: 'Method Not Allowed', // Phương thức không được phép
  NOT_ACCEPTABLE: 'Not Acceptable', // Không chấp nhận
  PROXY_AUTH_REQUIRED: 'Proxy Authentication Required', // Yêu cầu xác thực proxy
  REQUEST_TIMEOUT: 'Request Timeout', // Hết thời gian yêu cầu
  CONFLICT: 'Conflict', // Xung đột
  GONE: 'Gone', // Không còn tồn tại
  LENGTH_REQUIRED: 'Length Required', // Yêu cầu độ dài
  PRECONDITION_FAILED: 'Precondition Failed', // Điều kiện tiên quyết thất bại
  PAYLOAD_TOO_LARGE: 'Payload Too Large', // Nội dung yêu cầu quá lớn
  URI_TOO_LONG: 'URI Too Long', // URI quá dài
  UNSUPPORTED_MEDIA_TYPE: 'Unsupported Media Type', // Định dạng không được hỗ trợ
  RANGE_NOT_SATISFIABLE: 'Range Not Satisfiable', // Phạm vi không phù hợp
  EXPECTATION_FAILED: 'Expectation Failed', // Kỳ vọng thất bại
  IM_A_TEAPOT: "I'm a teapot", // Tôi là một ấm trà (mã vui)
  MISDIRECTED_REQUEST: 'Misdirected Request', // Yêu cầu bị gửi sai hướng
  UNPROCESSABLE_ENTITY: 'Unprocessable Entity', // Thực thể không thể xử lý
  LOCKED: 'Locked', // Bị khóa
  FAILED_DEPENDENCY: 'Failed Dependency', // Phụ thuộc thất bại
  TOO_EARLY: 'Too Early', // Quá sớm
  UPGRADE_REQUIRED: 'Upgrade Required', // Yêu cầu nâng cấp
  PRECONDITION_REQUIRED: 'Precondition Required', // Yêu cầu điều kiện tiên quyết
  TOO_MANY_REQUESTS: 'Too Many Requests', // Quá nhiều yêu cầu
  REQUEST_HEADER_FIELDS_TOO_LARGE: 'Request Header Fields Too Large', // Trường tiêu đề yêu cầu quá lớn
  UNAVAILABLE_FOR_LEGAL_REASONS: 'Unavailable For Legal Reasons', // Không có sẵn vì lý do pháp lý

  SERVER_ERROR: 'Internal Server Error', // Lỗi máy chủ nội bộ
  NOT_IMPLEMENTED: 'Not Implemented', // Chưa được thực hiện
  BAD_GATEWAY: 'Bad Gateway', // Gateway lỗi
  SERVICE_UNAVAILABLE: 'Service Unavailable', // Dịch vụ không khả dụng
  GATEWAY_TIMEOUT: 'Gateway Timeout', // Hết thời gian Gateway
  HTTP_VERSION_NOT_SUPPORTED: 'HTTP Version Not Supported', // Phiên bản HTTP không được hỗ trợ
  VARIANT_ALSO_NEGOTIATES: 'Variant Also Negotiates', // Biến thể cũng đàm phán
  INSUFFICIENT_STORAGE: 'Insufficient Storage', // Không đủ dung lượng lưu trữ
  LOOP_DETECTED: 'Loop Detected', // Phát hiện vòng lặp
  NOT_EXTENDED: 'Not Extended', // Không mở rộng
  NETWORK_AUTHENTICATION_REQUIRED: 'Network Authentication Required', // Yêu cầu xác thực mạng
};