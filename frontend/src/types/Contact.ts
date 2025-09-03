export interface ContactForm {
    name: string;
    email: string;
    phone: string;
    interestedIn: '1bed' | '2bed' | '3bed' | 'tour' | 'general' | '';
    message: string;
}

export interface ContactSubmissionResponse {
    success: boolean;
    message: string;
    inquiryId?: string;
}