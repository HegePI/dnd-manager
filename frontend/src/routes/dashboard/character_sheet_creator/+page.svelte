<script>
    import { onMount } from "svelte";
  
    // Load from localStorage or initialize an empty sheet
    let characterSheet = [];
    let newSectionName = "";
    let selectedFieldType = "text";
  
    const fieldTypes = ["text", "number", "checkbox"];
  
    // Add a new section
    function addSection() {
      if (newSectionName.trim() !== "") {
        characterSheet = [...characterSheet, { name: newSectionName, fields: [] }];
        newSectionName = "";
        saveSheet();
      }
    }
  
    // Add a field to a section
    function addField(sectionIndex) {
      const name = prompt("Enter field name:");
      if (name) {
        const newField = { name, type: selectedFieldType, value: "" };
        characterSheet[sectionIndex].fields = [
          ...characterSheet[sectionIndex].fields,
          newField
        ];
        saveSheet();
      }
    }
  
    // Remove a section
    function removeSection(index) {
      characterSheet.splice(index, 1);
      characterSheet = [...characterSheet];
      saveSheet();
    }
  
    // Remove a field from a section
    function removeField(sectionIndex, fieldIndex) {
      characterSheet[sectionIndex].fields.splice(fieldIndex, 1);
      characterSheet = [...characterSheet];
      saveSheet();
    }
  
    // Save the sheet to localStorage
    function saveSheet() {
      localStorage.setItem("characterSheet", JSON.stringify(characterSheet));
    }
  
    // Load the sheet from localStorage on mount
    onMount(() => {
      const savedSheet = localStorage.getItem("characterSheet");
      if (savedSheet) {
        characterSheet = JSON.parse(savedSheet);
      }
    });
  </script>
  
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
  
    .field input[type="text"],
    .field input[type="number"] {
      flex: 2;
    }
  
    .field input[type="checkbox"] {
      transform: scale(1.5);
    }
  </style>
  
  <div class="container">
    <h1>Character Sheet Designer</h1>
  
    <!-- Add Section -->
    <div>
      <input
        type="text"
        placeholder="Section Name"
        bind:value={newSectionName}
      />
      <button on:click={addSection}>Add Section</button>
    </div>
  
    <!-- Render Sections -->
    {#each characterSheet as section, sectionIndex}
      <div class="section">
        <h2>
          {section.name}
          <button on:click={() => removeSection(sectionIndex)}>Delete</button>
        </h2>
  
        <!-- Add Field -->
        <div>
          <label>Field Type:</label>
          <select bind:value={selectedFieldType}>
            {#each fieldTypes as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
          <button on:click={() => addField(sectionIndex)}>Add Field</button>
        </div>
  
        <!-- Render Fields -->
        {#each section.fields as field, fieldIndex}
          <div class="field">
            <label>{field.name} ({field.type})</label>
            {#if field.type === "text"}
              <input type="text" bind:value={field.value} placeholder="Enter text" />
            {:else if field.type === "number"}
              <input type="number" bind:value={field.value} />
            {:else if field.type === "checkbox"}
              <input type="checkbox" bind:checked={field.value} />
            {/if}
            <button on:click={() => removeField(sectionIndex, fieldIndex)}>Remove</button>
          </div>
        {/each}
      </div>
    {/each}
  </div>
  