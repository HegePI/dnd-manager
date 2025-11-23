import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return new Response(JSON.stringify({ status: 'ok', uptime: process.uptime() }), {
		headers: { 'Content-Type': 'application/json' },
		status: 200
	});
};
