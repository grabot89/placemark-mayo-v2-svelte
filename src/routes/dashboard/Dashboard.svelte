<script lang="ts">
  import type { Category } from "$lib/types/placemark-types";

  export let categories: Category[] = [];
</script>

<div class="columns is-multiline">
  {#each categories as category}
    <div class="column is-one-third">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h2 class="title is-4">{category.name}</h2>
            <div class="buttons">
              <a href="/category/{category._id}" class="button">
                <span class="icon">
                  <i class="fas fa-eye"></i>
                </span>
              </a>
              <a href="/dashboard/deletecategory/{category._id}" class="button">
                <span class="icon">
                  <i class="fas fa-trash"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
