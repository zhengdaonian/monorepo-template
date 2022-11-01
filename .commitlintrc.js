module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // 开发
				"fix", //  修复
				"style", //样式变更
				"refactor", //重构
				"perf", // 性能优化
				"build"
			]
		]
	}
};
