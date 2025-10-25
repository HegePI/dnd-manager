<script lang="ts">
	import { onMount } from 'svelte';

	interface Field {
		name: string;
		type: 'text' | 'number' | 'checkbox';
		value: string | number | boolean;
	}

	interface Section {
		name: string;
		fields: Field[];
	}

	let characterSheet: Section[] = $state([]);
	let newSectionName = $state('');
	let selectedFieldType: 'text' | 'number' | 'checkbox' = $state('text');

	const fieldTypes: Array<'text' | 'number' | 'checkbox'> = ['text', 'number', 'checkbox'];

	function addSection() {
		if (newSectionName.trim() !== '') {
			characterSheet = [...characterSheet, { name: newSectionName, fields: [] }];
			newSectionName = '';
			saveSheet();
		}
	}

	function addField(sectionIndex: number) {
		const name = prompt('Enter field name:');
		if (name && sectionIndex >= 0 && sectionIndex < characterSheet.length) {
			let initialValue;
			if (selectedFieldType === 'checkbox') {
				initialValue = false;
			} else if (selectedFieldType === 'number') {
				initialValue = 0;
			} else {
				initialValue = '';
			}
			const newField = { name, type: selectedFieldType, value: initialValue };
			const updatedSheet = [...characterSheet];
			updatedSheet[sectionIndex] = {
				...updatedSheet[sectionIndex],
				fields: [...updatedSheet[sectionIndex].fields, newField]
			};
			characterSheet = updatedSheet;
			saveSheet();
		}
	}

	function removeSection(index: number) {
		characterSheet.splice(index, 1);
		characterSheet = [...characterSheet];
		saveSheet();
	}

	function removeField(sectionIndex: number, fieldIndex: number) {
		if (
			sectionIndex >= 0 &&
			sectionIndex < characterSheet.length &&
			fieldIndex >= 0 &&
			fieldIndex < characterSheet[sectionIndex].fields.length
		) {
			const updatedSheet = [...characterSheet];
			updatedSheet[sectionIndex] = {
				...updatedSheet[sectionIndex],
				fields: updatedSheet[sectionIndex].fields.filter((_, index) => index !== fieldIndex)
			};
			characterSheet = updatedSheet;
			saveSheet();
		}
	}

	function saveSheet() {
		localStorage.setItem('characterSheet', JSON.stringify(characterSheet));
	}

	onMount(() => {
		const savedSheet = localStorage.getItem('characterSheet');
		if (savedSheet) {
			characterSheet = JSON.parse(savedSheet);
		}
	});
</script>

<div class="container">
	<h1>Character Sheet Designer</h1>

	<div>
		<input type="text" placeholder="Section Name" bind:value={newSectionName} />
		<button onclick={addSection}>Add Section</button>
	</div>

	{#each characterSheet as section, sectionIndex (section.name)}
		<div class="section">
			<h2>
				{section.name}
				<button onclick={() => removeSection(sectionIndex)}>Delete</button>
			</h2>

			<div>
				<label for="field-type-select-{sectionIndex}">Field Type:</label>
				<select id="field-type-select-{sectionIndex}" bind:value={selectedFieldType}>
					{#each fieldTypes as type (type)}
						<option value={type}>{type}</option>
					{/each}
				</select>
				<button onclick={() => addField(sectionIndex)}>Add Field</button>
			</div>

			{#each section.fields as field, fieldIndex (field.name)}
				<div class="field">
					<label for={'field-' + sectionIndex + '-' + fieldIndex}>{field.name} ({field.type})</label
					>
					{#if field.type === 'text'}
						<input
							id={'field-' + sectionIndex + '-' + fieldIndex}
							type="text"
							bind:value={field.value}
							placeholder="Enter text"
							oninput={() => saveSheet()}
						/>
					{:else if field.type === 'number'}
						<input
							id={'field-' + sectionIndex + '-' + fieldIndex}
							type="number"
							bind:value={field.value}
							oninput={() => {
								field.value = Number(field.value);
								saveSheet();
							}}
						/>
					{:else if field.type === 'checkbox'}
						<input
							id={'field-' + sectionIndex + '-' + fieldIndex}
							type="checkbox"
							checked={!!field.value}
							onchange={() => {
								field.value = !field.value;
								saveSheet();
							}}
						/>
					{/if}
					<button onclick={() => removeField(sectionIndex, fieldIndex)}>Remove</button>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.container {
		padding: 20px;
		font-family: Arial, sans-serif;
		background: #f9f9f9;
	}

	.section {
		margin-bottom: 20px;
		padding: 15px;
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	.section h2 {
		display: flex;
		justify-content: space-between;
		margin: 0 0 10px;
	}

	button {
		margin-right: 10px;
		padding: 5px 10px;
		cursor: pointer;
	}

	input,
	select {
		margin: 5px;
		padding: 5px;
	}

	.field {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.field label {
		flex: 1;
	}

	.field input[type='text'],
	.field input[type='number'] {
		flex: 2;
	}

	.field input[type='checkbox'] {
		transform: scale(1.5);
	}
</style>
