<template>
	<div class="home">
		<div class="home-page">
			<div class="banner">
				<div class="container">
					<h1 class="logo-font">conduit</h1>
					<p>A place to share your knowledge.</p>
				</div>
			</div>

			<div class="container page">
				<div class="row">
					<div class="col-md-9">
						<div class="feed-toggle">
							<ul class="nav nav-pills outline-active">
								<!-- <li class="nav-item">
									<a class="nav-link disabled" href>Your Feed</a>
								</li>-->
								<li class="nav-item">
									<a
										class="nav-link active"
										href
									>Global Feed {{tagLabel}}</a>
								</li>
							</ul>
						</div>

						<div
							v-for="article of articles"
							:key="article.createdAt"
							class="article-preview"
						>
							<div class="article-meta">
								<a href="profile.html">
									<img :src="article.author.image" />
								</a>
								<div class="info">
									<a
										href
										class="author"
									>{{ article.author.username }}</a>
									<span class="date">{{
										new Date(article.createdAt).toLocaleString()
									}}</span>
								</div>
								<button class="btn btn-outline-primary btn-sm pull-xs-right">
									<i class="ion-heart"></i>
									{{ article.favoritesCount }}
								</button>
							</div>
							<a
								href
								class="preview-link"
							>
								<h1>{{ article.title }}</h1>
								<p>{{ article.description }}</p>
								<span>Read more...</span>
							</a>
						</div>
						{{ articlesCount }}
					</div>

					<div class="col-md-3">
						<div class="sidebar">
							<p>Popular Tags</p>

							<div class="tag-list">
								<a
									v-for="tag of tags"
									:href="`#tag/#${tag}`"
									:key="tag"
									class="tag-pill tag-default"
									:class="{ 'tag-primary': isTagActive(tag) }"
									@click="onClickTag(tag)"
								>{{ tag }}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from "@/components/HelloWorld.vue";
	import { ArticlesService, TagsService } from "../services/api.service";

	export default {
		name: "Home",
		components: {
			// HelloWorld
		},
		data() {
			return {
				articles: null,
				articlesCount: null,
				tags: null,
				queries: {
					favorited: null,
					author: null,
					tag: null,
					limit: 5,
					offset: 0
				}
			};
		},
		computed: {
			tagLabel() {
				return this.queries["tag"] ? `#${this.queries.tag}` : ``;
			}
		},
		methods: {
			isTagActive(tag) {
				return this.queries.tag === tag;
			},
			onClickTag(currentTag) {
				this.queries.tag = currentTag;

				this.getArticles();
			},
			getArticles() {
				ArticlesService.getList(this.queries)
					.then(res => {
						this.articles = res.data.articles;
						this.articlesCount = res.data.articlesCount;
					})
					.catch(err => {
						throw new Error(`[ERROR_ARTICLE_GET] ${err}`);
					});
			}
		},
		mounted() {
			this.getArticles();

			TagsService.get()
				.then(res => {
					this.tags = res.data.tags;
				})
				.catch(err => {
					throw new Error(`[ERROR_TAGS_GET ${err}]`);
				});
		}
	};
</script>
