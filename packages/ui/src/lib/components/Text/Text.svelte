<script lang="ts">
	export let variant = 'h1';
	export let dimmed = false;
</script>

<span class={`${variant}${dimmed ? ' dimmed' : ''}`}>
	<slot />
	{#if dimmed}
		[dimmed]
	{/if}
</span>

<style>
	.dimmed {
		color: gray;
	}
</style>
