<script lang="ts">
	import type { feedback } from '$lib/types';

	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let happy = 3;
	let submitted = false;
	let success = false;

	const set_doc = (
		name: string,
		email: string,
		happy: number,
		subject: string,
		message: string
	): feedback => {
		return {
			_type: 'feedback',
			name: name,
			email: email,
			happy: happy,
			subject: subject,
			message: message
		};
	};

	async function submit_form() {
		submitted = true;
		if (message.length > 0 && subject.length > 0) {
			fetch('/submit_feedback', {
				method: 'post',
				body: JSON.stringify(set_doc(name, email, happy, subject, message))
			}).then((res) => {
				// console.log(res);
				success = true;
			});
		}
	}
</script>

<div class="form-control text-xl">
	<h1 class="text-2xl">Website Feedback</h1>
	{#if success}
		<div class="alert alert-success shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Feedback successfully submitted! Thanks!</span>
			</div>
		</div>
	{/if}
	<label class="input-group p-2 text-xl">
		<span>Name</span>
		<input
			type="text"
			placeholder="James Baker"
			class="input input-accent text-xl"
			bind:value={name}
		/>
	</label>
	<label class="input-group p-2 text-xl">
		<span>Email</span>
		<input
			type="email"
			placeholder="netid@rice.edu"
			class="input input-accent text-xl"
			bind:value={email}
		/>
	</label>
	<label class="input-group p-2 text-xl">
		<span>Satisfaction</span>
		<div class="btn-group border border-accent">
			<button class="btn text-xl" on:click={() => (happy = 1)} class:bg-secondary={happy === 1}
				>😞</button
			>
			<button class="btn text-xl" on:click={() => (happy = 2)} class:bg-secondary={happy === 2}
				>😐</button
			>
			<button class="btn text-xl" on:click={() => (happy = 3)} class:bg-secondary={happy === 3}
				>😀</button
			>
		</div>
	</label>
	<label class="input-group p-2 text-xl">
		<span>Subject</span>
		<input
			type="text"
			placeholder="Will Rice is a college"
			class="input text-xl"
			class:input-error={subject.length < 1 && submitted}
			class:input-accent={subject.length > 0 || !submitted}
			bind:value={subject}
		/>
	</label>
	<label class="input-group p-2 text-xl">
		<span>Feedback</span>
		<textarea
			class="textarea p-2 text-xl w-full"
			class:textarea-error={message.length < 1 && submitted}
			class:textarea-accent={message.length > 0 || !submitted}
			placeholder="Will Rice should not be a college."
			bind:value={message}
		/>
	</label>
	<button class="btn btn-success btn-outline p-2" on:click={submit_form}>Submit</button>
</div>
