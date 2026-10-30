const { Plugin, Notice, TFile } = require("obsidian");

const BASE = "go/milo-notes/";

// Same rules as Quartz's slugifyFilePath, so the link matches the built page.
function slugify(path) {
  return path
    .replace(/\.md$/, "")
    .split("/")
    .map((s) => s.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/[?#]/g, ""))
    .join("/");
}

module.exports = class MiloNotesLink extends Plugin {
  async onload() {
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof TFile) || file.extension !== "md") return;
        menu.addItem((item) =>
          item.setTitle("Copy Google link").setIcon("link").onClick(() => this.copyLink(file)),
        );
      }),
    );
    this.addCommand({
      id: "copy-google-link",
      name: "Copy Google link",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file || file.extension !== "md") return false;
        if (!checking) this.copyLink(file);
        return true;
      },
    });
  }

  async copyLink(file) {
    const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
    const published = fm?.publish === true || fm?.publish === "true";
    if (!published) {
      await this.app.fileManager.processFrontMatter(file, (f) => {
        f.publish = true;
      });
    }
    const url = BASE + slugify(file.path);
    await navigator.clipboard.writeText(url);
    new Notice(published ? `Copied ${url}` : `Published, copied ${url} (live in ~5 min)`);
  }
};
