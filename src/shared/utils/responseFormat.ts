export class HttpResponseFormat {
	private data: any = [];
	private message: string | string[] = '';
	private code: number = 0;
	
	set(data: any, message: string | string[], code: number) {
		this.data = data;
		this.message = message;
		this.code = code;
	}

	get() {
		return {data: this.data, message: this.message, code: this.code};
	}
}
