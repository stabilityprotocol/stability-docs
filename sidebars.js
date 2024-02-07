/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  tutorialSidebar: [
    // {
    // type: "html"
    // value: "Start",
    // className: "sidebar-title",
    // },
    {
      type: "category",
      label: "How it works",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "how_it_works/index" },
      items: [
        "how_it_works/intro_to_stability",
        "how_it_works/stability_concepts",
        "how_it_works/architecture",
        "how_it_works/applications",
        "how_it_works/nodes",
        "how_it_works/api",
        "how_it_works/api_faqs",
      ],
    },
    {
      type: "category",
      label: "Users",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "users/index" },
      items: [
        "users/connect",
        "users/using_stability/transactions",
        "users/using_stability/portal",
      ],
    },
    {
      type: "category",
      label: "Nodes",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "creating_a_validator/index" },
      items: [
        "creating_a_validator/run_node_using_binary",
        "creating_a_validator/run_node_using_docker",
        "creating_a_validator/generate_and_insert_node_key",
        "creating_a_validator/upgrades",
      ],
    },
    {
      type: "category",
      label: "Builders",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "builders/index" },
      items: [
        {
          link: {
            type: "doc",
            id: "builders/tutorials/index",
          },
          type: "category",
          label: "Tutorials",
          items: [
            "builders/tutorials/enviroment",
            "builders/tutorials/deploy_contract_with_hardhat",
            "builders/tutorials/deploy_contract_with_remix",
          ],
        },
        "builders/what_is_different",
        "builders/viem_setup_example",
        "builders/ethers_setup_example",
        "builders/precompiles",
        "builders/register_for_api_key",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "resources/index" },
      items: [
        "resources/block_explorer",
        "resources/audits",
        "resources/faq",
        "resources/marketplace",
        "resources/contact",
      ],
    },
  ],
};

module.exports = sidebars;
