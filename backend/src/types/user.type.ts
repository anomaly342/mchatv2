export type UserInfoObject = {
	id: number;
	username: string;
	role: string;
	avatar: string;
	iat: number;
	exp: number;
};

export type UserList = { id: number; body: string; created: Date }[];
