<script lang="ts">
	import { Text } from '@sk/ui';
	import { SampleService } from '@sk/tools';

	const service = new SampleService();
	service.doSomething();

	export const prerender = true;
</script>

<h1 class="bg-slate-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Text dimmed>sample text</Text>
